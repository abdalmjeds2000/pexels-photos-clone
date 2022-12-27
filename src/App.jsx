import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';


const App = () => {
  
  return (
    <BrowserRouter>
      <div id="app-container" className='min-w-full bg-white min-h-screen mt-16'>
        <Header />
        
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          {/* Search */}
          <Route path='/' element={<Search />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App