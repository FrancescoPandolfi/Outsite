import {Link} from "react-router-dom";

const Menubar = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-2">
        <Link to="/" className="py-2 px-3 inline-flex items-center text-sm font-medium text-outsite-green">
          Book
        </Link>
        <Link to="/" className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          Trips
        </Link>
        <Link to="/" className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          Rewards
        </Link>
        <Link to="/" className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          Refer a Friend
        </Link>
        <Link to="/" className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          Membership
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
