import React from 'react';

import styles from "components/DeliveryModal/styles.module.css";

function DeliveryModal() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>Куда доставить?</div>
        <div className={styles.btnWrapper}>
            <button className={styles.deliveryBtn}>Доставка</button>
            <button className={styles.selfDeliveryBtn}>Самовывоз</button>
        </div>
        <div className={styles.inputsWrapper}>
          <input type="text" placeholder='Укажите улицу' className={styles.streetInput}/>
          <input type="text" placeholder='Подъезд' className={styles.input}/>
          <input type="text" placeholder='Этаж' className={styles.input}/>
          <input type="text" placeholder='Квартира' className={styles.input}/>
          <input type="text" placeholder='Код двери' className={styles.input}/>
          <input type="text" placeholder='Комментарий к адресу' className={styles.commentInput}/>
        </div>
        <button className={styles.confirmBtn}>Подтвердить адрес</button>
    </div>
  );
}

export default DeliveryModal;