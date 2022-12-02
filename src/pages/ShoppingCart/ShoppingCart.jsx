import React from "react";

import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import OrderItem from "components/OrderItem/OrderItem";
import RelatedItem from "components/RelatedItem/RelatedItem";

import style from "pages/ShoppingCart/styles.module.css"

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import CondensedMilk from "assets/SaucesImg/CondensedMilk.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";
import RaspberryJam from "assets/SaucesImg/RaspberryJam.png";
import SauceItem from "components/SauceItem/SauceItem";
import PromoCode from "components/PromoCode/PromoCode";
import SumOrder from "components/SumOrder/SumOrder";

function ShoppingCart() {



    return (

        <div className={style.wrapper}>
            <OrderItem
                image={FourChease}
                title="Четыре сыра"
                description="Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г"
                price={25}
            />
            <OrderItem
                image={FourSeasonsPizza}
                title="Четыре сезона"
                description="Грибной соус, варено-копченый карбонад (свинина), грудинка (свинина), маринованные опята, сыр фета, сыр дорблю, сыр моцарелла, базилик."
                price={30}
            />
            <div className={style.paggination}>
                <button className={style.button}><MdOutlineArrowBackIosNew /></button>

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
                <button className={style.button}><MdOutlineArrowForwardIos /></button>
            </div>

            <div className={style.souces}>
                <SauceItem
                    image={CheeseSauce}
                    title="Сырный соус"
                    price={0.6}
                />
                <SauceItem
                    image={BarbecueSauce}
                    title="Бербукю"
                    price={0.6}
                />
                <SauceItem
                    image={RanchSauce}
                    title="Ранч"
                    price={0.6}
                />
                <SauceItem
                    image={RaspberryJam}
                    title="Сгущенка"
                    price={0.6}
                />
                <SauceItem
                    image={CondensedMilk}
                    title="Малиновое варенье"
                    price={0.6}
                />
            </div>

            <div className={style.promo}>
                <PromoCode />
                <SumOrder />
            </div>

        </div>
    )




}


export default ShoppingCart;

