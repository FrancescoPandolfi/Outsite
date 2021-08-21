const RoomsItem = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between rounded-md border border-gray-300 shadow-sm">
      <div className="flex-none w-full lg:w-48 xl:w-56">
        <div className="relative aspect-w-4 aspect-h-4 bg-no-repeat bg-center bg-cover cursor-pointer"
             style={{backgroundImage: `url(https://h-img1.cloudbeds.com/uploads/17164/screen_shot_2019-07-30_at_9.14.16_am~~5d406cfa560b3.png)`}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               className="absolute top-auto left-auto right-px bottom-px h-6 w-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      </div>
      <div className="flex-grow p-4 space-y-3">
        <div className="flex items-center"><h4 className="mr-3">Private Queen + Private Bathroom</h4>
          <div className="h-5 w-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 className="h-5 w-5 cursor-pointer hover:text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <div>Private Room · Queen Bed</div>
        <p>Private room with a queen size bed, ensuite private bathroom, wardrobe, floor fan&nbsp;and a small desk.
          Located on the 4th floor, must climb stairs. Note: This room does not have&nbsp;windows or balcony, it has a
          skylight.&nbsp;</p></div>
      <div
        className="flex lg:flex-col items-end justify-between lg:justify-center flex-none w-full sm:w-auto sm:w-48 p-4 space-y-3">
        <span
          className="hidden lg:block px-4 py-2 bg-outsite-green bg-opacity-30 rounded-lg uppercase text-xs text-gray-500">27 nights • 1 Guest</span>
        <div className="text-left lg:text-right">
          <div className=""><span className="text-3xl leading-9 font-semibold text-gray-900"><span>$1,342</span></span>
          </div>
          <span className="text-sm text-gray-300">Save 30% on monthly stays</span></div>
        <div>
          <button type="button"
                  className="inline-flex items-center  border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outsite-green disabled:opacity-50 px-4 py-2 text-sm text-outsite-green bg-white hover:bg-outsite-green hover:text-white border-outsite-green">Add
            to trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsItem;
