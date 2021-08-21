const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-start mb-8 p-5 border border-gray-200 rounded-md shadow-md bg-white space-y-3">
        <span className="text-xl tracking-tight text-gray-900">Cleanliness and Safety</span>
        <p className="">Health and
          safety are of the utmost importance to Outsite and our Guests during the Covid-19 outbreak. Find all of our
          precautionary measures, including refund policies
          <a className="text-outsite-green" target="_blank" rel="noopener noreferrer" href="https://www.outsite.co/faq/corona-virus"> here.</a>
        </p>
      </div>
    </>
  );
};

export default Banner;
