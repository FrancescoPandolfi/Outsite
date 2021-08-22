import {Route, Switch, useHistory} from "react-router-dom";
import BookNow from "./pages/BookNow";
import Search from "./pages/Search";
import {useEffect, useState} from "react";
import {Property} from "./models/Property";
import {Dates} from "./models/Dates";
import axios from "axios";
import moment from "moment";

const App = () => {

  const [properties, setProperties] = useState<Property[]>([])
  const [guests, setGuests] = useState<string | null>(null)
  const [days, setDays] = useState<Dates>();
  const [locationId, setLocationId] = useState<string | null>(null)
  const history = useHistory();

  const countries = [
    'United States',
    'Latin America',
    'Europe',
    'Asia Pacific',
    'Caribbean',
  ];

  useEffect(() => {
    axios.get<{properties: Property[]}>('http://localhost:8888/api/locations/getAll')
      .then(r => {
        setProperties(r.data.properties);
      })
      .catch(e => console.log(e))
  }, []);

  const searchButtonHandler = (): void => {
    let queryParams = `/?id=${locationId}&guests=${guests}`;
    if (days?.to && days?.from) {
      const checkin = moment(days.from).format('YYYY-MM-DD');
      const checkout = moment(days.to).format('YYYY-MM-DD');
      queryParams += `&checkin=${checkin}&checkout=${checkout}`;
    }
    history.push(`/search${queryParams}`);
  }

  const selectLocationHandler = (locationId: string): void => setLocationId(locationId);
  const dayPickerHandler = ({from, to}: Dates): void => setDays({from, to});
  const selectGuestsHandler = (guests: string): void => setGuests(guests);

  return (
    <main>
      <Switch>
      <Route path="/search">
        <Search
          properties={properties}
          countries={countries}
          selectLocationHandler={selectLocationHandler}
          selectGuestsHandler={selectGuestsHandler}
          dayPickerHandler={dayPickerHandler}
          searchButtonHandler={searchButtonHandler}
        />
      </Route>
      <Route path="/">
        <BookNow
          properties={properties}
          countries={countries}
          selectLocationHandler={selectLocationHandler}
          selectGuestsHandler={selectGuestsHandler}
          dayPickerHandler={dayPickerHandler}
          searchButtonHandler={searchButtonHandler}
        />
      </Route>
    </Switch>
    </main>
  );
}

export default App;
