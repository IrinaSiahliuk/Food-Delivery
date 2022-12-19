import React from "react";

import { ProductItem } from "components";

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import KetchupPizza from "assets/PizzasImg//ketchup.png";
import MushroomPizza from "assets/PizzasImg//mushroom.png";

import styles from 'pages/Menu/styles.module.css';

function Menu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_title}>Пицца</div>
      <div className={styles.menu_wrapper}>
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
    </div>
  );
}

export default Menu;
