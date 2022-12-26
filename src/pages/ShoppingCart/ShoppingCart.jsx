import React, { useContext } from "react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import {
  OrderingStage,
  OrderItem,
  RelatedItem,
  SauceItem,
  PromoCode,
  SumOrder,
  PagginationButtons,
  ModalOrderForm,
} from "components";
import { Store } from "app";

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import CondensedMilk from "assets/SaucesImg/CondensedMilk.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";
import RaspberryJam from "assets/SaucesImg/RaspberryJam.png";

import style from "./styles.module.css";

function ShoppingCart() {
  const [store, setStore] = useContext(Store);
  console.log(store);

  function deleteOrder(id){
    setStore((pre) => ({
      ...pre,
      user: {
        ...pre.user, 
        shoppingCart: store.user.shoppingCart.filter(item => item.title !== id)
      }
    }))
  }

  return (
    <div>
      <div className={style.stage}>
        <OrderingStage />
      </div>
      <div className={style.mainTitle}>Корзина</div>
      <div className={style.wrapper}>
        {!store.user.shoppingCart.length ? (
          <>Корзина пуста</>
        ) : (
          store.user.shoppingCart.map((item) => (
            <OrderItem
              image={item.image}
              title={item.title}
              description={item.text}
              price={item.price}
              onDelete={deleteOrder}
            />
          ))
        )}
        <div className={style.secondaryTitle}>Добавить к заказу?</div>
        <div className={style.carousel}>
          <button className={style.pagginationArrow}>
            <MdOutlineArrowBackIosNew />
          </button>
          <div className={style.carousel}>
            <RelatedItem
              image={FourChease}
              description="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
              price={25}
            />
            <RelatedItem
              image={FourSeasonsPizza}
              description="Грибной соус, варено-копченый карбонад (свинина), грудинка (свинина), маринованные опята, сыр фета, сыр дорблю, сыр моцарелла, базилик."
              price={30}
            />
            <RelatedItem
              image={FourSeasonsPizza}
              description="Грибной соус, варено-копченый карбонад (свинина), грудинка (свинина), маринованные опята, сыр фета, сыр дорблю, сыр моцарелла, базилик."
              price={30}
            />
          </div>
          <button className={style.pagginationArrow}>
            <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className={style.secondaryTitle}>Соусы к бортикам и закускам</div>
        <div className={style.souces}>
          <SauceItem image={CheeseSauce} title="Сырный соус" price={0.6} />
          <SauceItem image={BarbecueSauce} title="Бербукю" price={0.6} />
          <SauceItem image={RanchSauce} title="Ранч" price={0.6} />
          <SauceItem image={RaspberryJam} title="Сгущенка" price={0.6} />
          <SauceItem
            image={CondensedMilk}
            title="Малиновое варенье"
            price={0.6}
          />
        </div>
        <div className={style.secondaryTitle}>Промокод</div>

        <div className={style.promo}>
          <PromoCode />
          <SumOrder />
        </div>

        <div className={style.pagginationWrapper}>
          <PagginationButtons />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
