import React, {useContext} from "react";

import style from "components/ModalOrderForm/styles.module.css";

import { SauceItem } from "components";
import { Store } from "app";

import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";
import { useState } from "react";


function ModalOrderForm({ image, title, description, isVisible = false, onClose, props }) {
    const [store, setStore] = useContext(Store);
    const onAddProduct = () => {
        setStore((pre) => ({
          ...pre,
          user: { ...pre.user, shoppingCart: [...pre.user.shoppingCart, props] },
        }));
      };

        const[size, setSize] = useState("small");
        const[dough, setDough] = useState("traditional");  
        const[sauce, setSauce] = useState("cheese");

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
                        <button 
                        className={style.sizeBtn}
                        onClick={()=>setSize("small")}
                        style={{backgroundColor: size === "small" && "#FF2E65", color:size === "small" && "#FFFFFF"}}>
                        Маленькая</button>
                        <button className={style.sizeBtn}
                        onClick={()=>setSize("average")}
                        style={{backgroundColor: size === "average" && "#FF2E65", color:size === "average" && "#FFFFFF"}}
                        >Средняя</button>
                        <button className={style.sizeBtn}
                        onClick={()=>setSize("big")}
                        style={{backgroundColor: size === "big" && "#FF2E65", color:size === "big" && "#FFFFFF"}}
                        >Большая</button>
                    </div>
                    <div className={style.doughBtnsWrapper}>
                        <button className={style.doughBtn}
                        onClick={()=>setDough("traditional")}
                        style={{backgroundColor: dough === "traditional" && "#FF2E65", color:dough === "traditional" && "#FFFFFF"}}
                        >Традиционное</button>
                        <button className={style.doughBtn}
                        onClick={()=>setDough("thin")}
                        style={{backgroundColor: dough === "thin" && "#FF2E65", color:dough === "thin" && "#FFFFFF"}}
                        >Тонкое тесто</button>
                    </div>
                    <div className={style.sauces}>
                        <SauceItem
                            image={CheeseSauce}
                            title="Сырный соус"
                            price={0.6}
                            onClick={()=>setSauce("cheese")}
                            style={{borderColor: sauce === "cheese" && "#FF2E65", color: sauce === "cheese" && "FF2E65"}}
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