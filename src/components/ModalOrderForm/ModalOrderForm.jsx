import React, { useState } from "react";

import style from "components/ModalOrderForm/styles.module.css";

import { SauceItem } from "components";

import BarbecueSauce from "assets/SaucesImg/BarbecueSauce.png";
import RanchSauce from "assets/SaucesImg/RanchSauce.png";
import CheeseSauce from "assets/SaucesImg/CheeseSauce.png";

function ModalOrderForm({
  image,
  title,
  description,
  isVisible = false,
  onClose,
  onAddProduct,
}) {
  const [size, setSize] = useState("s");
  const [dough, setDough] = useState("1");

  return !isVisible ? null : (
    <div className={style.modal} onClick={onClose}>
      <div className={style.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={style.imgWrapper}>
          <img className={style.img} src={image} alt="" />
        </div>
        <div className={style.selectWrapper}>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
          <div className={style.sizeBtnsWrapper}>
            <button
              className={style.sizeBtn}
              style={{ backgroundColor: size === "s" && "pink" }}
              onClick={() => {
                setSize("s");
              }}
            >
              Маленькая
            </button>
            <button
              className={style.sizeBtn}
              style={{ backgroundColor: size === "m" && "pink" }}
              onClick={() => {
                setSize("m");
              }}
            >
              Средняя
            </button>
            <button
              className={style.sizeBtn}
              style={{ backgroundColor: size === "l" && "pink" }}
              onClick={() => {
                setSize("l");
              }}
            >
              Большая
            </button>
          </div>
          <div className={style.doughBtnsWrapper}>
            <button
              className={style.doughBtn}
              style={{ backgroundColor: dough === "1" && "pink" }}
              onClick={() => {
                setDough("1");
              }}
            >
              Традиционное
            </button>
            <button
              className={style.doughBtn}
              style={{ backgroundColor: dough === "2" && "pink" }}
              onClick={() => {
                setDough("2");
              }}
            >
              Тонкое тесто
            </button>
          </div>
          <div className={style.sauces}>
            <SauceItem image={CheeseSauce} title="Сырный соус" price={0.6} />
            <SauceItem image={BarbecueSauce} title="Бербукю" price={0.6} />
            <SauceItem image={RanchSauce} title="Ранч" price={0.6} />
          </div>
          <div className={style.orederBtnWrapper} onClick={onAddProduct}>
            <button className={style.orderBtn} onClick={onClose}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalOrderForm;
