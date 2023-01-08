import React, { useContext } from "react";

import style from "components/SumOrder/styles.module.css";
import { Store } from "app";

function SumOrder() {
    const [store] = useContext(Store);

    let sum = 0;
    store.user.shoppingCart.forEach((item) => {
        sum += item.count * item.price;
    });

    return(
        <div className={style.wrapper}>
            <div className={style.title}>Сумма заказа:</div>
            <div className={style.price}>{sum} BYN</div>
        </div>
    )
}

export default SumOrder;