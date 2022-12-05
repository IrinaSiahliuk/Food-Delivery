import React from 'react';

import Card from 'assets/DeliveryImg/Card.svg'
import styles from "components/Payment/styles.module.css";

function Payment() {
  return (
    <div className={styles.paymentWrapper}>
        <div className={styles.title}>Способы оплаты</div>
        <div className={styles.payment}>
            <p className={styles.paymentItem}><input type="radio" name="paymentItem" /><img classname={styles.cardImg} src={Card} />Картой на сайте</p>
            <p className={styles.paymentItem}><input type="radio" name="paymentItem" />Наличными</p>
        </div>
        <div className={styles.change}>
            <p>С какой суммы подготовить сдачу?</p>
            <input type="text" className={styles.changeInput} />
            <p><input type="checkbox" className={styles.withoutСhange} />Без сдачи</p>
        </div>
    </div>
  );
}

export default Payment;