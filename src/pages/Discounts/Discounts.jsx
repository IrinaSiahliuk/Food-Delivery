import React from "react";

import DiscountItem from '../../components/DiscountItem/DiscountItem';

import style from '../../components/DiscountItem/styles.module.css';

import Order from '../../assets/DiscountsImg/Order.png';
import GamePresents from '../../assets/DiscountsImg/GamePresents.png';
import HawaiianPizza from '../../assets/DiscountsImg/HawaiianPizza.png';
import TwoPizzas from '../../assets/DiscountsImg/TwoPizzas.png';

function Discounts() {

    return (
        
    <div className={style.wrapper}>
    <DiscountItem
      image={GamePresents}
      title="Дарим кибер-призы"
      description="Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.
      "
    />
    <DiscountItem
      image={Order}
      title="Ночная доставка"
      description="Скидка 10% по промокоду NIGHT при заказе 2 пицц 30 или 35 см (кроме пицц: Пепперони фреш, Ветчина и грибы, Ветчина и сыр, Маргарита, Пицца-конструктор, Сырная, Ветчина и огурчики, Пепперони с грибами и дополнительных ингредиентов, пиццы из половинок).
      "
    />
    <DiscountItem
      image={HawaiianPizza}
      title="Пицца Гавайская в подарок!"
      description="Вот Дарим пиццу «Гавайская» 25 см при заказе на сумму не менее 14,90 руб.
      Акция сработает только если у клиента не было ни одного заказа ранее.
      Акция не суммируется с другими специальными предложениями пиццерии «Додо Пицца».
      "
    />
    <DiscountItem
      image={TwoPizzas}
      title="Додо Вторник - 2-ая пицца в подарок!"
      description="Каждый вторник ДОДО ВТОРНИК и на доставку! Оформить заказ в ресторане или на самовывоз можно по промокоду 1001. В ресторане и на самовывоз акция распространяется на все пиццы 30 и 35 см (кроме пицц из половинок).
      "
    />
  </div>
    )

}

export default Discounts;