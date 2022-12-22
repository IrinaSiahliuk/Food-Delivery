import { useEffect } from "react";
import React from "react";
import { observer } from "mobx-react-lite";

import { ProductItem } from "components";

import styles from "./styles.module.css";
import { ProductsModel } from "./model";

function Menu() {
  useEffect(() => {
    ProductsModel.fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu_title}>Пицца</div>
      <div className={styles.menu_wrapper}>
        {ProductsModel.loading ? (
          <>Loading....</>
        ) : (
          ProductsModel.products.map((item) => (
            <ProductItem
              image={item.image}
              title={item.title}
              text={item.text}
              price={item.price}
              key={item.title}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default observer(Menu);
