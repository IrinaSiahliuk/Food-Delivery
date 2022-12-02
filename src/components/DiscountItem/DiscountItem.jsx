import React from "react";

import style from "components/DiscountItem/styles.module.css";

function DiscountItem({ image, title, description }) {
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <div className={style.img}>
                    <img src={image} alt="Discount" />
                </div>
                <div className={style.title}>{title}</div>
                <div className={style.info}>
                    <div className={style.text}>{description}</div>
                </div>
                <button className={style.button}>Посмотреть</button>
            </div>
        </div>
        
    )
}

export default DiscountItem;