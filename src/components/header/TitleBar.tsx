import {Property} from "../../models/Property";

const TitleBar = ({selectedProperty}: { selectedProperty: Property }) => {

  return (
    <div className="flex justify-between mb-4">
      <div>
            <span
              className="text-sm leading-6 text-white uppercase tracking-widest">{selectedProperty.wfContent.houseName}</span>
        <h2 className="text-white">{selectedProperty.wfContent.name}</h2>
      </div>
      <div>
        <button type="button"
                className="inline-flex items-center  border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outsite-green disabled:opacity-50 px-2.5 py-1.5 text-xs  text-outsite-green bg-white hover:bg-outsite-green hover:text-white border-outsite-green">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-2">
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          Photo Gallery
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
