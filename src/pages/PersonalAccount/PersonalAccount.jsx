import React, { useContext, useState } from "react";

import styles from "pages/PersonalAccount/styles.module.css";
import Bonus from "assets/AccountImg/Bonus.png";
import { Link, useResolvedPath } from "react-router-dom";
import { Store } from "app";

function PersonalAccount() {
  const [store, setStore] = useContext(Store);
  const [valueName, setValueName] = useState(store.user.name);
  const [valuePhone, setValuePhone] = useState(store.user.phone);
  const [disabledName, setDisabledName] = useState (true);
  const [disabledPhone, setDisabledPhone] = useState (true);

  const changeNameInput = (e) => {
    setValueName(e.target.value);
  };

  const changeName = () => {
    setDisabledName(false);
  };

  const saveName = () => {
    setDisabledName(true);
    
    setStore((pre) => ({
      ...pre,
      user: { ...pre.user, name: valueName },
    }));
    
    let localUsers = localStorage.getItem('users');
    let users = JSON.parse(localUsers);
    users.forEach((item)=>{
      if(item.phone === store.user.phone){
        item = store.user;
        localStorage.setItem('users', JSON.stringify(users));
      }
    });
  };

  const changePhoneInput = (e) => {
    setValuePhone(e.target.value);
  };

  const changePhone = () => {
    setDisabledPhone(false);
  };

  const savePhone = () => {
    setDisabledPhone(true);

    setStore((pre) => ({
      ...pre,
      user: { ...pre.user, phone: valuePhone },
    }));
  };

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
              value={valueName}
              disabled={disabledName}
              onChange={changeNameInput}
            />
            <div className={styles.btnWrapper}>
              <button onClick={changeName} className={styles.button}>Изменить</button>
              <button onClick={saveName} className={styles.button}>Сохранить</button>
            </div>
          </div>
          <div className={styles.fieldTitle}>Номер телефона</div>
          <div className={styles.wrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Phone number"
              value={valuePhone}
              disabled={disabledPhone}
              onChange={changePhoneInput}
            />
            <div className={styles.btnWrapper}>
              <button onClick={changePhone} className={styles.button}>Изменить</button>
              <button onClick={savePhone} className={styles.button}>Сохранить</button>
            </div>
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
