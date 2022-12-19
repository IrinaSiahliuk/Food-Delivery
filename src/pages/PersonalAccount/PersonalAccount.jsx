import React from "react";

import styles from "pages/PersonalAccount/styles.module.css";
import Bonus from "assets/AccountImg/Bonus.png";
import { Link } from "react-router-dom";

function PersonalAccount() {
  return (
    <div>
      <div className={styles.accountWrapper}>
        <div className={styles.bonus}>
          <div className={styles.bonusTitle}>Мои бонусы</div>
          <div className={styles.bonusItem}>
            <div className={styles.img}>
              <img src={Bonus} alt="Бонус" />
            </div>
            <div className={styles.itemTitle}>
              Бонусы появятся здесь после заказа
            </div>
          </div>
          <Link to={"/discounts"} className={styles.discounts}>
            <div className={styles.discounts}>Все наши акции</div>
          </Link>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.userTitle}>Личные данные</div>
          <div className={styles.fieldTitle}>Имя</div>
          <div className={styles.wrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="User Name"
            />
            <button className={styles.button}>Изменить</button>
          </div>
          <div className={styles.fieldTitle}>Номер телефона</div>
          <div className={styles.wrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Phone number"
            />
            <button className={styles.button}>Изменить</button>
          </div>
          <div className={styles.userTitle}>Подписки</div>
          <div className={styles.subscriptions}>
            <input className={styles.radio} type="radio" checked />
            Сообщать о бонусах, акциях и новых продуктах
          </div>
          <Link to={"/"}>
            <button className={styles.backBtn}>Выйти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;
