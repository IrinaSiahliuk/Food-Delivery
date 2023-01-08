import React, { useContext } from "react";

import styles from "components/Nav/styles.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";
import { Store } from "app";

function Nav() {
  const [store] = useContext(Store);

  let basketCount = 0;
  store.user.shoppingCart.forEach((item) => {
    basketCount += item.count;
  });

  return (
    <div className={styles.navWrapper}>
      <ul className={styles.navList}>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Паста</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Супы</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Салаты</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Антипасти</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Напитки</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Десерты</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Бакалея</li>
        </Link>
        <Link to={ROUTES.DISCOUNTS} className={styles.navListItem}>
          <li>Акции</li>
        </Link>
        <Link to={ROUTES.HOME} className={styles.navListItem}>
          <li>Комбо</li>
        </Link>
      </ul>
      <div className={styles.navBtn}>
        <Link to={ROUTES.PERSONAL_ACCOUNT} className={styles.enterBtn}>
          <span>Войти</span>
        </Link>
        <Link to={ROUTES.SHOPPING_CART}>
          <button className={styles.basketBtn}>
            Корзина | {basketCount}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
