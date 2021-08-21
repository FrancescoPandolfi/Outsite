const Menubar = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-2">
        <a className="py-2 px-3 inline-flex items-center text-sm font-medium text-outsite-green" href="/">
          Book
        </a>
        <a className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
           href="/">
          Trips
        </a>
        <a className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
           href="/">
          Rewards
        </a>
        <a className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
           href="/">
          Refer a Friend
        </a>
        <a className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900" href="/" >
          Membership
        </a>

      </div>
    </div>
  );
};

export default Menubar;
