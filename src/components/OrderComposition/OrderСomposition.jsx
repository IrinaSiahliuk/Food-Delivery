import React from 'react';

import styles from  "components/OrderComposition/styles.module.css";

function OrderComposition() {
  return (
    <div className={styles.orderWrapper}>
      <p className={styles.title}>Состав заказа</p>
      <p className={styles.sum}>
        Сумма заказа
      </p>
      <p className={styles.freeDelivery}>Бесплатная доставка</p>
    </div>
  );
}

export default OrderComposition;