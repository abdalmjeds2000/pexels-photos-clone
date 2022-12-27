import React from 'react';
import { IoLogoFoursquare } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import SelectLanguage from './SelectLanguage';

const Header = () => {
  return (
    <nav className='sec-container fixed top-0 z-10 bg-gray-50 w-full shadow-2xl'>
      <div className='px-4 md:px-8 h-16'>
        <div className='h-full flex justify-between items-center'>
          <div className='flex gap-1 items-center font-bold'>
            <Link to="/" aria-label="FEXELS" rel="noopener">
              <IoLogoFoursquare 
                className='text-2xl text-brand-main-color hover:text-brand-main-color-secondary cursor-pointer transition' 
              />
            </Link>
            <span className='text-gray-800'>FEXELS</span>
          </div>
          <div className='flex'>
            <SearchInput />
            <SelectLanguage />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header