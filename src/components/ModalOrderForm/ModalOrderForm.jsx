import React,{useState} from "react";

import style from "components/ModalOrderForm/styles.module.css";

import {SauceItem} from "components";

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import CondensedMilk from "assets/SaucesImg/CondensedMilk.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";
import RaspberryJam from "assets/SaucesImg/RaspberryJam.png";

function ModalOrderForm ({image,title,description,price}){

    return(
            <div className={style.wrapper}>
                <div className={style.imgWrapper}>
                    <img className={style.img} src={image} alt="" />
                </div>
                <div className={style.selectWrapper}>
                    <div className={style.title}>{title}</div>
                    <div className={style.description}>{description}</div>
                    <div className={style.sizeBtnsWrapper}>
                        <button className={style.sizeBtn}>Маленькая</button>
                        <button className={style.sizeBtn}>Средняя</button>
                        <button className={style.sizeBtn}>Большая</button>
                    </div>
                    <div className={style.doughBtnsWrapper}>
                        <button className={style.doughBtn}>Традиционное</button>
                        <button className={style.doughBtn}>Тонкое тесто</button>
                    </div>
                    <div className={style.sauces}>
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
                    <div className={style.orederBtnWrapper}>
                        <button className={style.orderBtn}>Добавить в корзину</button>
                    </div>
                </div>

            </div>
    )
}

export default ModalOrderForm;