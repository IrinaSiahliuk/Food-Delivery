import React from "react";

import style from "components/SumOrder/styles.module.css";

function SumOrder ({price}){
    return(
        <div className={style.wrapper}>
            <div className={style.title}>Сумма заказа:</div>
            <div className={style.price}>{price} BYN</div>
        </div>
    )
}

export default SumOrder;