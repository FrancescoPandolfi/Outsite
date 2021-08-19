import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {ChevronDownIcon} from "@heroicons/react/solid";

const User = () => {
    return (
        <div className="flex items-center">
            <Menu as="div" className="ml-3 relative">
                <div>
                    <Menu.Button className="bg-outsite-green flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <div className="h-10 w-10">
                            <div title="Francesco"
                                 className="flex items-center justify-center h-full w-full rounded-full bg-outsite-green text-white text-lg uppercase">FP
                            </div>
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        Profile
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        Sign Out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default User;
