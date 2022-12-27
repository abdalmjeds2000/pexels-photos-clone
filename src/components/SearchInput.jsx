import React, { useEffect, useRef } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
const SearchInput = () => {
  const navigate = useNavigate();
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <Paper
        component="form"
        style={{boxShadow: 'none'}}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          inputRef={inputRef}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for free photos"
          inputProps={{
            onKeyDown: (e) => {
              if(e.key === "Enter") {
                e.preventDefault();
                if(e.target.value.length >= 3) {
                  navigate({
                    pathname: '/search',
                    search: `?q=${inputRef.current.value}`,
                  });
                }
              }
            }, 
          }}
        />
        <IconButton 
          type="button" 
          sx={{ p: '10px' }} 
          aria-label="search"
          onClick={() => {
            if(inputRef.current.value.length >= 3) {
              navigate({ pathname: '/search', search: `?q=${inputRef.current.value}` })
            }
          }}
        >
          <BiSearch className='text-brand-main-color' />
        </IconButton>
      </Paper>
    </div>
  )
}

export default SearchInput