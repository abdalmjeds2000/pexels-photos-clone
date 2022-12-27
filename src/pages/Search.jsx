import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Search = () => {
  const { dispatchQuery } = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const q = decodeURI(location.search).split('?q=')[1];



  useEffect(() => {
    if(q && q.length >= 3) {
      dispatchQuery({ q: q });
    } else {
      navigate("/home");
    }
  }, [q, dispatchQuery, navigate]);

  return (
    <div>Search About: {q}</div>
  )
}

export default Search