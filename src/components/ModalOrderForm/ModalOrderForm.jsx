import React, {useContext} from "react";

import style from "components/ModalOrderForm/styles.module.css";

import { SauceItem } from "components";
import { Store } from "app";

import FourChease from "assets/PizzasImg/four-chease.png";
import FourSeasonsPizza from "assets/PizzasImg//four-seasons.png";
import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import CondensedMilk from "assets/SaucesImg/CondensedMilk.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";
import RaspberryJam from "assets/SaucesImg/RaspberryJam.png";


function ModalOrderForm({ image, title, description, isVisible = false, onClose, props }) {
        const [store, setStore] = useContext(Store);
        const onAddProduct = () => {
            setStore((pre) => ({
              ...pre,
              shoppingCart: [...pre.shoppingCart, { ...props }],
            }));
          };

    return !isVisible ? null : (
        <div className={style.modal} onClick={onClose}>
            <div className={style.wrapper} onClick={e => e.stopPropagation()}>
                <div className={style.imgWrapper}>
                    <img className={style.img} src={image} alt=""/>
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
                    </div>
                    <div className={style.orederBtnWrapper} onClick={onAddProduct}>
                        <button className={style.orderBtn} onClick={onClose}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrderForm;