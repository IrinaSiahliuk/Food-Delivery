import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Menu from './pages/Menu/Menu';
import Discounts from './pages/Discounts/Discounts';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/discounts' element={<Discounts />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
