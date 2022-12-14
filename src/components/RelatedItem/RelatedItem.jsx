import React from "react";

import style from "components/RelatedItem/styles.module.css";

function RelatedItem({ image, description, price }) {

    return (
            <div className={style.wrapper}>
                <div className={style.product}>
                    <div>
                        <img className={style.img} src={image} alt="" />
                    </div>
                    <div className={style.text}>
                        <div className={style.description}>{description}</div>
                        <div className={style.price}>от {price} BYN</div>
                    </div>
                </div>
            </div>
    );
}


export default RelatedItem;