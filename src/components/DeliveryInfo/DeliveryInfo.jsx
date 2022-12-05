import React from 'react';

import styles from "components/DeliveryInfo/styles.module.css";

function DeliveryInfo() {
  return (
    <div>
        <div className={styles.title}>Заказ на доставку</div>
        <div className={styles.form}>
            <div className={styles.name}>
                <p>Имя</p>
                <input type="text" className={styles.nameInput} />
            </div>
            <div className={styles.phone}>
                <p>Номер телефона</p>
                <input type="text" className={styles.phoneInput} readOnly />
                <button className={styles.changeBtn}>Изменить</button>
            </div>
            <div className={styles.address}>
                <p>Адрес доставки</p>
                <input type="text" className={styles.addressInput} readOnly />
                <button className={styles.changeBtn}>Изменить</button>
            </div>
            <div className={styles.time}>
                <p>Время доставки</p>
                <input type="text" className={styles.timeInput} readOnly />
                <button className={styles.changeBtn}>Изменить</button>
            </div>
        </div>
    </div>
  );
}

export default DeliveryInfo;