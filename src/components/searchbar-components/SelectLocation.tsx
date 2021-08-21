import React, {useEffect} from 'react';
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {SelectorIcon} from '@heroicons/react/solid'
import {Property} from "../../models/Property";
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'
import LocationElement from "../locations/LocationElement";
import {useLocation} from "react-router-dom";

export type SelectLocationProps = {
  properties: Property[],
  countries: string[],
  selectLocationHandler: (locationId: string) => void
}

const SelectLocation = ({properties, countries, selectLocationHandler}: SelectLocationProps) => {

  const [location, setLocation] = useState<Property>()
  const loc = useLocation();
  const queryParams = new URLSearchParams(loc.search);

  useEffect(() => {
    if (properties.length > 0) {
      const locationFromId = properties.find(p => p.id === queryParams.get('id'));
      if (locationFromId) {
        setLocation(locationFromId);
      } else {
        setLocation(properties[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties])

  useEffect(() => {
    if (location) {
      selectLocationHandler(location.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, selectLocationHandler])

  return (
    <Listbox value={location} onChange={setLocation}>
      <div className="relative mt-1">
        <Listbox.Button
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm">
          <span className="text-sm block truncate">{location?.wfContent?.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {countries.map((c, i) => (
              <Disclosure defaultOpen={true} key={i}>
                {({open}) => (
                  <>
                    <Disclosure.Button
                      className="flex justify-between w-full px-4 py-2 text-lg text-gray-900 text-left">
                      <span>{c}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-gray-500">
                      {properties
                        .filter(p => p.region === c)
                        .map((p, i) => <LocationElement key={i} p={p}/>
                        )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectLocation;
