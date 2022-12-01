import React from "react";

import style from "./styles.module.css";

function PromoCode(){

    return(
        <div className={style.wrapper}>
            <input className={style.input} type="text" placeholder="Введите промокод" />
            <button className={style.button}>Применить</button>
        </div>
    )
}

export default PromoCode;