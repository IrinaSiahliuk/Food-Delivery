import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import { DeliveryInfo, OrderComposition, Payment, PromoCode } from 'components';

import styles from "components/OrderForDelivery/styles.module.css";

function OrderForDelivery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.orderWrapper}>
        <DeliveryInfo />
        <div className={styles.promoBlock}>
          <div className={styles.promoTitle}>Промокод</div>
          <PromoCode />
        </div>
        <Payment />
        <div className={styles.buttonWrapper}>
          <button className={styles.backBtn}><IoIosArrowBack />Назад в корзину</button>
          <button className={styles.arrangeBtn}>Оформить заказ<IoIosArrowForward /></button>
        </div>
      </div>
      <OrderComposition />
    </div>
  );
}

export default OrderForDelivery;