import React, { useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {Property} from "../models/Property";
import SearchBar from "../components/searchbar/SearchBar";
import {Props} from "../models/Props";
import LogoBar from "../components/header/LogoBar";
import TitleBar from "../components/header/TitleBar";
import axios from "axios";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Search = ({
                  countries,
                  properties,
                  selectLocationHandler,
                  searchButtonHandler,
                  dayPickerHandler,
                  selectGuestsHandler
                }: Props) => {

  const history = useHistory();
  const location = useLocation();
  const [selectedProperty, setSelectedProperty] = useState<Property | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (!queryParams.get('id')) {
      history.push('/');
      return;
    }
    axios.get<Property>('http://localhost:8888/api/locations/' + queryParams.get('id'))
      .then(r => {
        setSelectedProperty(r.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoading &&
      <>
        <div
          className="relative flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center bg-opacity-30"
          style={{backgroundImage: `url(${selectedProperty?.wfContent.heroImage})`}}
        >
          <LogoBar/>
          <div className="mt-8 sm:mt-20">
            <TitleBar selectedProperty={selectedProperty!}/>
            <SearchBar
              properties={properties}
              countries={countries}
              searchButtonHandler={searchButtonHandler}
              selectLocationHandler={selectLocationHandler}
              dayPickerHandler={dayPickerHandler}
              selectGuestsHandler={selectGuestsHandler}
            />
          </div>
        </div>
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">

          </div>
        </section>
      </>}
      {isLoading && <LoadingSpinner/>}
    </>
  )
};

export default Search;
