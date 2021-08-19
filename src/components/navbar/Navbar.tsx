import Logo from "./logo";
import Menubar from "./menubar";
import User from "./User";


const Navbar = () => {
    return (
        <nav className="bg-white ">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <Menubar />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <User />
                    </div>
                    {/*<div className="-mr-2 flex sm:hidden">*/}
                    {/*    <button*/}
                    {/*        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*/}
                    {/*        id="headlessui-disclosure-button-304" type="button" aria-expanded="false"><span*/}
                    {/*        className="sr-only">Open main menu</span>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*             stroke="currentColor" className="block h-6 w-6" aria-hidden="true">*/}
                    {/*            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                    {/*                  d="M4 6h16M4 12h16M4 18h16"></path>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
