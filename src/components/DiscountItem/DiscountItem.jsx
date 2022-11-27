import React from "react";

import style from "./styles.module.css";


function DiscountItem({image,title,description,button}){

    return(
        <div className={style.wrapper}>
            <div className={style.item}>
                <div className={style.img}>
                    <img src={image} alt="Discount" />
                </div>
                <div className={style.info}>
                    <div className={style.title}>{title}</div>
                    <div className={style.text}>{description}</div>
                    <button className={style.button}>{button}</button>
                </div>

            </div>

        </div>
    )
}

export default DiscountItem;