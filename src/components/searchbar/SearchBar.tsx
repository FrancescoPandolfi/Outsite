import React from 'react';
import SelectLocation from "../searchbar-components/SelectLocation";
import DayPicker from "../searchbar-components/DayPicker";
import SelectGuests from "../searchbar-components/SelectGuests";
import {Property} from "../../models/Property";

const SearchBar = ({properties, countries}: { properties: Property[], countries: string[] }) => {
  return (
    <div className="relative container mx-auto px-4 z-10">
      <div className="-mt-56 sm:-mt-32 lg:-mt-24 mb-10">
        <div className="text-3xl leading-9 text-white font-semibold mb-4">
          Work anywhere. Live differently.
        </div>
        <div className="bg-white filter drop-shadow-md rounded-md px-4 py-3 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2 items-end">
            <div className="lg:col-span-2">
              <label className="text-sm leading-5 font-medium text-gray-700">
                Space
              </label>
              <div className="mt-1 relative">
                <SelectLocation properties={properties} countries={countries} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <label className="text-sm leading-5 font-medium text-gray-700">
                Dates
              </label>
              <div className="relative mt-1">
                <DayPicker />
              </div>
            </div>
            <div>
              <label className="text-sm leading-5 font-medium text-gray-700">
                Guests
              </label>
              <div className="relative mt-1">
                <SelectGuests />
              </div>
            </div>
            <div className="h-10">
              <button
                type="button"
                className="inline-flex items-center  border border-transparent font-medium rounded shadow-sm
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outsite-green
                disabled:opacity-50 px-4 py-2 text-sm text-white bg-outsite-green hover:bg-outsite-green w-full justify-center">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
