import React from "react";

import DiscountItem from '../../components/DiscountItem/DiscountItem';

import style from '../../components/DiscountItem/styles.module.css';

import Order from '../../assets/Discounts-images/Order.png';
import GamePresents from '../../assets/Discounts-images/GamePresents.png';
import HawaiianPizza from '../../assets/Discounts-images/HawaiianPizza.png';
import TwoPizzas from '../../assets/Discounts-images/TwoPizzas.png';

function Discounts() {

    return (
        
    <div className={style.wrapper}>
    <DiscountItem
      image={GamePresents}
      title="Дарим кибер-призы"
      description="Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      "
      button="Посмотреть"
    />
    <DiscountItem
      image={Order}
      title="Дарим кибер-призы"
      description="Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      "
      button="Посмотреть"
    />
    <DiscountItem
      image={HawaiianPizza}
      title="Дарим кибер-призы"
      description="Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      "
      button="Посмотреть"
    />
    <DiscountItem
      image={TwoPizzas}
      title="Дарим кибер-призы"
      description="Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      "
      button="Посмотреть"
    />
  </div>
    )

}

export default Discounts;