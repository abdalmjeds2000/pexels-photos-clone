import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';

let CancelToken = axios.CancelToken;

const StateContext = createContext();

const handleSearch = (state, action) => {
  console.log({ query: action.q });
  return { query: action.q }
}


let cancel;
const fetchCuratedPhotos = async (page) => {
  if(cancel) cancel();
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const options = {
    method: 'GET',
    url: 'https://pexelsdimasv1.p.rapidapi.com/v1/curated',
    params: {per_page: '24', page: page},
    headers: {
      Authorization: API_KEY,
      'X-RapidAPI-Key': '700f3ec77amsh374abf9e06a720bp1363e1jsnbf5dead5ff88',
      'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
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
  const initQuery = { query: "" };
  const [query, dispatchQuery] = useReducer(handleSearch, initQuery);
  return (
    <StateContext.Provider
      value={{
        query: query.query,
        dispatchQuery,
        fetchCuratedPhotos
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);