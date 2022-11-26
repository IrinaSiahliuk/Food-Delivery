import React from "react";

import ItemCSS from "./ProductItem.module.css";

function ProductItem({ image, title, text, price }) {
  return (
    <div className={ItemCSS.item_wrapper}>
      <div className={ItemCSS.img_wrapper}>
        <img className={ItemCSS.pizza_img} src={image} alt="" />
      </div>

      <div className={ItemCSS.product_description}>
        <div className={ItemCSS.description_title}>
          <h2 className={ItemCSS.title}>{title}</h2>
        </div>

        <div className={ItemCSS.text_wrapper}>
          <p className={ItemCSS.text}>{text}</p>
        </div>
      </div>

      <div className={ItemCSS.buy_area}>
        <span className={ItemCSS.price}> от {price} ₽</span>
        <button className={ItemCSS.basket_btn}>В корзину</button>
      </div>
    </div>
  );
}

export default ProductItem;
