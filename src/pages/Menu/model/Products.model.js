import { makeAutoObservable } from "mobx";

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import KetchupPizza from "assets/PizzasImg//ketchup.png";

class ProductsModel {
  products = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetch() {
    this.loading = true;
    setTimeout(() => {
      this.products = [
        {
          title: "Четыре сыра",
          text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
          price: 220,
          image: FourChease,
        },
        {
          title: "Гавайская",
          text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
          price: 399,
          image: FourSeasonsPizza,
        },
        {
          title: "Пицца с кетчупом",
          text: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
          price: 680,
          image: KetchupPizza,
        },
      ];

      this.loading = false;
    }, 2000);
  }
}

export default new ProductsModel();
