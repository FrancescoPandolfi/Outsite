import React from 'react';
import {useParams} from "react-router-dom";

const Search = () => {

  const params = useParams<{id: string}>();

  return (
    <>
      {params.id}
    </>
  );
};

export default Search;
