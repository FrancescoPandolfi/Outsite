import React, {useEffect} from 'react';
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {useLocation} from "react-router-dom";

const SelectGuests = ({selectGuestsHandler}: { selectGuestsHandler: (guests: string) => void }) => {

  const guestsList = ['One guest', 'Two guests'];
  const [guests, setGuests] = useState(guestsList[0])
  const loc = useLocation();
  const guestParam = new URLSearchParams(loc.search).get('guests');

  useEffect(() => {
    selectGuestsHandler(guests);
  }, [guests, selectGuestsHandler]);

  useEffect(() => {
      if (guestParam) {
        setGuests(guestParam);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Listbox value={guests} onChange={setGuests}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm">
            <span className="block truncate">{guests}</span>
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
              className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {guestsList.map((guest, i) => (
                <Listbox.Option
                  key={i}
                  className={({active}) => `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'} hover:bg-gray-100 cursor-default select-none relative py-2 pl-10 pr-4`}
                  value={guest}
                >
                  {({selected, active}) => (
                    <>
                      <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                        {guest}
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? 'text-amber-600' : 'text-amber-600'} absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true"/>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    );
  };

  export default SelectGuests;
