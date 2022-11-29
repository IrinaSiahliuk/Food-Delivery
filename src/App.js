import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Menu from './pages/Menu/Menu';
import Discounts from './pages/Discounts/Discounts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/discounts' element={<Discounts />} />
      </Routes>
    </div>
  );
}

export default App;
