import Navbar from "../components/navbar/Navbar";
import Locations from "../components/locations/Locations";
import Jumbo from "../components/jumbo/Jumbo"
import SearchBar from "../components/searchbar/SearchBar";
import axios from "axios";
import {Property} from "../models/Property";
import {useCallback, useEffect, useState} from "react";

const BookNow = () => {

  const [properties, setProperties] = useState<Property[]>([])

  const countries = [
    'United States',
    'Latin America',
    'Europe',
    'Asia Pacific',
    'Caribbean',
  ];

  const getPropertyList = useCallback(() => {
    axios.get<{properties: Property[]}>('http://localhost:8888/api/locations')
      .then(r => {
        console.log(r.data.properties)
        setProperties(r.data.properties);
      })
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    getPropertyList();
  }, [getPropertyList])

  return (
    <>
      <Navbar/>
      <Jumbo />
      <SearchBar properties={properties} countries={countries} />
      <Locations properties={properties} />
    </>
  );
};

export default BookNow;
