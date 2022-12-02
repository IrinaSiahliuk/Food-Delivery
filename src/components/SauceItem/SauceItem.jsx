import React from "react";

import style from "components/SauceItem/SauceItem";

function SauceItem({ image, title, price }) {
    return (
        <div className={style.wrapper}>
            <div className={style.product}>
                <img className={style.image} src={image} alt="Соус" />
                <div className={style.title}>{title}</div>
                <div className={style.price}>от {price} BYN</div>
            </div>
        </div>
    )
}

export default SauceItem;