import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';

let CancelToken = axios.CancelToken;

const StateContext = createContext();




let cancel;



const fetchDataSearch = async (query, page) => {
  if(cancel) cancel();
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const options = {
    method: 'GET',
    url: 'https://api.pexels.com/v1/search',
    params: {query: query, per_page: '25', page: page},
    headers: {
      Authorization: API_KEY,
    },
    cancelToken: new CancelToken(c => cancel = c)
  };
  try {
    const { data } = await axios.request(options);
    return data
  } catch(err) {
    console.log(err);
  }
}




const fetchCuratedPhotos = async (page) => {
  if(cancel) cancel();
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const options = {
    method: 'GET',
    url: 'https://api.pexels.com/v1/curated',
    params: {per_page: '48', page: page},
    headers: {
      Authorization: API_KEY,
    },
    cancelToken: new CancelToken(c => cancel = c)
  };
  try {
    const { data } = await axios.request(options);
    return data
  } catch(err) {
    console.log(err);
  }
}





export const ContextProvider = ({ children }) => {
  const initQuery = { query: "", response: {} };
  const [searchResult, setSearchResult] = useState({});
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = async (state, action) => {
    setSearchLoading(true);
    const response = await fetchDataSearch(action.query, action.page);
    setSearchResult(response);
    setSearchLoading(false);
    return { query: action.query }
  }
  const [query, dispatchQuery] = useReducer(handleSearch, initQuery);


  return (
    <StateContext.Provider
      value={{
        query: query.query,
        dispatchQuery,
        searchResult,
        searchLoading,
        fetchCuratedPhotos
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);