const Checkout = () => {
  return (
    <>
      <div
        className="h-screen bg-white overflow-auto space-y-6 p-4 pb-24 sm:h-auto sm:overflow-none sm:p-1 sm:pb-1 hidden sm:block">
        <h5>Your Trip</h5>
        <p>To create your Trip, select a Room or Bed, and 'Add to Trip'. Search again and select your chosen options to add more Rooms, Beds or Spaces to your Trip.</p>
        <div className="space-y-3">
          <button
            type="button"
            disabled
            className="inline-flex items-center  border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-outsite-green disabled:opacity-50 px-4 py-2 text-sm text-white bg-outsite-green hover:bg-outsite-green w-full justify-center">
            Checkout
          </button>
        </div>
        <div>
          <h6 className="text-xs leading-4 font-medium uppercase tracking-wide text-gray-500 mb-2">
            All rooms include
          </h6>
          <p>
          <span>Fresh linens and towels</span> · <span>Fast, reliable Wifi</span> · <span>Secure Building</span> · <span>Hairdryer and Toiletries</span>
          </p>
        </div>
        <div>
          <h6 className="text-xs leading-4 font-medium uppercase tracking-wide text-gray-500 mb-2">
            Got a discount or referral code
          </h6>
          <div>
            <div className="flex rounded-md shadow-sm">
              <div className=" items-stretch flex-grow focus-within:z-10">
                <input
                  type="text"
                  name="promoCode"
                  className="focus:ring-outsite-green focus:border-outsite-green block w-full rounded-none rounded-l-md  sm:text-sm border-gray-300"
                  placeholder="Promo/Referral code"
                />
              </div>
              <button
                disabled
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed flex justify-between bottom-0 left-0 right-0 bg-white z-30 px-4 py-4 border-t-1 border-gray-200 shadow-bumper	 sm:hidden">
        <div className="flex flex-col w-full pr-4">
          <div className="flex justify-between mb-1"><span
            className="text-sm leading-5 font-medium text-gray-900">Total</span><span
            className="text-sm leading-5 font-medium text-gray-900"><span>$0.00</span></span></div>
          <div>See more</div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
