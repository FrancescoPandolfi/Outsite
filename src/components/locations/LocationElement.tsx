import {Listbox} from '@headlessui/react'
import {CheckIcon} from "@heroicons/react/solid";
import {Property} from "../../models/Property";

const LocationElement = ({p}: { p: Property }) => {
  return (
    <Listbox.Option
      key={p.id}
      className={({active}) => `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'} hover:bg-gray-100 cursor-pointer select-none relative py-2 pl-10 pr-4`}
      value={p}
    >
      {({selected, active}) => (
        <div className="flex flex-col">
                      <span
                        className={`${selected ? 'font-medium' : 'font-normal'} text-gray-900 text-base truncate transition-colors duration-200`}>
                        {p.wfContent.name}
                      </span>
          <span className=' text-gray-500 text-xxs tracking-widest uppercase truncate'>
                        {p.wfContent.houseName}
                      </span>
          {selected ? (
            <span
              className={`${active ? 'text-outsite-green' : 'text-outsite-green'}  absolute inset-y-0 left-0 flex items-center pl-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true"/>
                        </span>
          ) : null}
        </div>
      )}
    </Listbox.Option>
  );
};

export default LocationElement;
