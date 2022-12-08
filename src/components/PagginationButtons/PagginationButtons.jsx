import React from "react";

import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

import style from "components/PagginationButtons/styles.module.css";

function PagginationButtons() {

    return (
        <div className={style.wrapper}>
            <button className={style.backBtn}>
                <MdArrowBackIos/>
                <div className={style.title}>Вернуться назад</div>
            </button>
            <button className={style.confirmationBtn}>
                <div className={style.secondaryTitle}>Оформить заказ</div>
                <MdArrowForwardIos/>
            </button>
        </div>
    )
}

export default PagginationButtons;