import SelectLocation from "../searchbar-components/SelectLocation";
import DayPicker from "../searchbar-components/DayPicker";
import SelectGuests from "../searchbar-components/SelectGuests";
import {Props} from "../../models/Props";
import {useLocation} from "react-router-dom";

const SearchBar = ({
                     properties,
                     countries,
                     selectLocationHandler,
                     searchButtonHandler,
                     dayPickerHandler,
                     selectGuestsHandler
                   }: Props) => {

  const location = useLocation();
  const queryParamsDate = {
    checkin: new URLSearchParams(location.search).get('checkin'),
    checkout: new URLSearchParams(location.search).get('checkout')
  }

  return (
    <div className="bg-white filter drop-shadow-md rounded-md px-4 py-3 sm:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2 items-end">
        <div className="lg:col-span-2">
          <label className="text-sm leading-5 font-medium text-gray-700">
            Space
          </label>
          <div className="mt-1 relative">
            <SelectLocation properties={properties} countries={countries}
                            selectLocationHandler={selectLocationHandler}/>
          </div>
        </div>
        <div className="lg:col-span-2">
          <label className="text-sm leading-5 font-medium text-gray-700">
            Dates
          </label>
          <div className="relative mt-1">
            <DayPicker dayPickerHandler={dayPickerHandler} queryParamsDate={queryParamsDate}/>
          </div>
        </div>
        <div>
          <label className="text-sm leading-5 font-medium text-gray-700">
            Guests
          </label>
          <div className="relative mt-1">
            <SelectGuests selectGuestsHandler={selectGuestsHandler}/>
          </div>
        </div>
        <div className="h-10">
          <button
            onClick={searchButtonHandler}
            type="button"
            className="inline-flex items-center  border border-transparent font-medium rounded shadow-sm
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outsite-green
                disabled:opacity-50 px-4 py-2 text-sm text-white bg-outsite-green hover:bg-outsite-green w-full justify-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
