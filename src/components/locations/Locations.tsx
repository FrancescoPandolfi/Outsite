import {Tab} from '@headlessui/react'
import {Link} from 'react-router-dom';
import {Property} from "../../models/Property";

const Locations = ({properties}: { properties: Property[] }) => {

  const countries = [
    'United States',
    'Latin America',
    'Europe',
    'Asia Pacific',
    'Caribbean',
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 space-y-6">
      <Tab.Group>
        <Tab.List>
          {countries.map((country, i) => (
            <Tab key={i} className={({selected}) => selected
              ? 'bg-outsite-green text-white transition-colors duration-200 rounded-xl px-4 py-3'
              : 'bg-white text-gray-700 hover:text-gray-900 transition-colors duration-200 rounded-xl px-4 py-3'}>
              {country}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {countries.map((country, i) => (
            <Tab.Panel key={i}>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4'>
                  {properties
                    .filter(p => p.region === country)
                    .map(p => (
                      <Link to={`/search/?id=${p.id}`} key={p.id}>
                        <div
                          className='aspect-w-4 aspect-h-3 bg-cover bg-no-repeat bg-center rounded-md'
                          style={{backgroundImage: `url(${(p.wfContent.heroImage)})`}}>
                        </div>
                        <div className="py-2">
                          <h4 className='text-lg leading-6 font-medium text-gray-900'>{p.wfContent.name}</h4>
                          <p className='text-sm leading-5 text-gray-600'>{p.wfContent.houseName}</p>
                        </div>
                      </Link>
                    ))}
                </div>
            </Tab.Panel>
          ))}

        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Locations;
