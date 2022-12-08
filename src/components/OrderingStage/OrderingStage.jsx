import React from "react";

import style from "components/OrderingStage/styles.module.css";

import Logo from 'assets/HeaderImg/Logo.svg';

function OrderingStage() {


    return (
        <div className={style.headerWrapper}>
            <div className={style.logoWrapper}>
                <img classname={style.logoImg} src={Logo} />
                <div className={style.logoTitles}>
                    <div className={style.logoTitle}>YA BAO</div>
                    <div className={style.logoSubtitle}>дух китайской еды</div>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.circles}>
                    <div className={style.number}>1</div>
                    <div className={style.title}>Корзина</div>
                </div>
                <div className={style.line}></div>
                <div className={style.circles}>
                    <div className={style.number}>2</div>
                    <div className={style.title}>Оформление заказа</div>
                </div>
                <div className={style.line}></div>
                <div className={style.circles}>
                    <div className={style.number}>3</div>
                    <div className={style.title}>Заказ принят</div>
                </div>
            </div>
        </div>
    )
}

export default OrderingStage;