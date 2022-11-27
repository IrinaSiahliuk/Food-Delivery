import React from 'react';

import styles from './styles.module.css';

function Nav({basketCount}) {
    return (
        <div className={styles.navWrapper}>
           <ul className={styles.navList}>
                <li className={styles.navListItem}>Паста</li>
                <li className={styles.navListItem}>Супы</li>
                <li className={styles.navListItem}>Салаты</li>
                <li className={styles.navListItem}>Антипасти</li>
                <li className={styles.navListItem}>Напитки</li>
                <li className={styles.navListItem}>Десерты</li>
                <li className={styles.navListItem}>Бакалея</li>
                <li className={styles.navListItem}>Акции</li>
                <li className={styles.navListItem}>Комбо</li>
                <li className={styles.navListItem}>Контакты</li>
            </ul>
            <div className={styles.navBtn}>
                <span className={styles.enterBtn}>Войти</span>
                <button className={styles.basketBtn}>Корзина  |  {basketCount}</button>
            </div>
        </div>
    );
}

export default Nav;