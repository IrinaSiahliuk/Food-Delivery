import React from "react";

import MenuCSS from './Menu.module.css'

import ProductItem from "../../components/ProductItem/ProductItem";

import FourChease from "../../assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "../../assets/PizzasImg//four-seasons.png";
import KetchupPizza from "../../assets/PizzasImg//ketchup.png";
import MushroomPizza from "../../assets/PizzasImg//mushroom.png";

function Menu() {
  return (
    <div className={MenuCSS.menu_wrapper}>
      Menu
      <ProductItem
        image={FourChease}
        title="Четыре сыра"
        text="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
        price="600"
      />
      <ProductItem
        image={FourSeasonsPizza}
        title="Четыре сезона"
        text="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
        price="750"
      />
      <ProductItem
        image={KetchupPizza}
        title="Пицца с кетчупом"
        text="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
        price="650"
      />
      <ProductItem
        image={MushroomPizza}
        title="Грибная пицца"
        text="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
        price="700"
      />
    </div>
  );
}

export default Menu;
