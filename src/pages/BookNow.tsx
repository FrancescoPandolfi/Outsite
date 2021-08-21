import Navbar from "../components/navbar/Navbar";
import Locations from "../components/locations/Locations";
import Jumbo from "../components/jumbo/Jumbo"
import SearchBar from "../components/searchbar/SearchBar";
import {Props} from "../models/Props";
import React, {useEffect, useState} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const BookNow = ({
                   countries,
                   properties,
                   selectLocationHandler,
                   searchButtonHandler,
                   dayPickerHandler,
                   selectGuestsHandler
                 }: Props) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    if (properties.length > 0) {
      setIsLoading(false);
    }
  }, [properties])

  return (
    <>
      {!isLoading &&
      <>
        <Navbar/>
        <Jumbo/>
        <div className="relative container mx-auto px-4 z-10">
          <div className="-mt-56 sm:-mt-32 lg:-mt-24 mb-10">
            <div className="text-3xl leading-9 text-white font-semibold mb-4">
              Work anywhere. Live differently.
            </div>
            <SearchBar
              properties={properties}
              countries={countries}
              searchButtonHandler={searchButtonHandler}
              dayPickerHandler={dayPickerHandler}
              selectGuestsHandler={selectGuestsHandler}
              selectLocationHandler={selectLocationHandler}
            />
          </div>
        </div>
        <Locations properties={properties}/>
      </>}

      {isLoading && <LoadingSpinner/>}
    </>
  );
};

export default BookNow;
