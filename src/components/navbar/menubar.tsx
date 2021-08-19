const Menubar = () => {
    return (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-2"><a
                className="py-2 px-3 inline-flex items-center text-sm font-medium text-outsite-green"
                href="/book-now">Book</a><a
                className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                href="/trips">Trips</a><a
                className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                href="/rewards">Rewards</a><a
                className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                href="/referral-program">Refer a Friend</a>
                <div className="relative"><a
                    className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-700 cursor-default"
                    id="headlessui-menu-button-306" type="button" aria-haspopup="true"
                    aria-expanded="false">Membership</a></div>
            </div>
        </div>
    );
};

export default Menubar;
