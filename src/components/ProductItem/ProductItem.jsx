import React, { useContext, useState } from "react";

import styles from "components/ProductItem/styles.module.css";

import { ModalOrderForm } from "components";
import { Store } from "app";

function ProductItem(props) {
  
  const { image, title, text, price } = props;
  const [store, setStore] = useContext(Store);
  const [isModal, setModal] = useState(false);

  const onAddProduct = () => {
    setStore((pre) => ({
      ...pre,
      user: { ...pre.user, shoppingCart: [...pre.user.shoppingCart, props] },
    }));
  };

  return (
    <>
      <div className={styles.item_wrapper}>
        <div className={styles.img_wrapper}>
          <img className={styles.pizza_img} src={image} alt="" />
        </div>

        <div className={styles.product_description}>
          <div className={styles.description_title}>
            <h2 className={styles.title}>{title}</h2>
          </div>

          <div className={styles.text_wrapper}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>

        <div className={styles.buy_area}>
          <span className={styles.price}> от {price} ₽</span>
          <button className={styles.basket_btn} onClick={() => setModal(true)}>
            Выбрать
          </button>
        </div>
      </div>
      <ModalOrderForm
        isVisible={isModal}
        image={image}
        title={title}
        description={text}
        onClose={() => setModal(false)}
        onAddProduct={onAddProduct}
      />
    </>
  );
}

export default ProductItem;
