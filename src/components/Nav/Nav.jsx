import React from 'react';

import styles from 'components/Nav/styles.module.css';
import { Link } from 'react-router-dom';

function Nav({basketCount}) {
    
    return (
        <div className={styles.navWrapper}>
           <ul className={styles.navList}>
                <Link to={'/'} className={styles.navListItem}><li>Паста</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Супы</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Салаты</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Антипасти</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Напитки</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Десерты</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Бакалея</li></Link>
                <Link to={"/discounts"} className={styles.navListItem}><li>Акции</li></Link>
                <Link to={'/'} className={styles.navListItem}><li>Комбо</li></Link>
                <Link to={'/about'} className={styles.navListItem}><li>Контакты</li></Link>
            </ul>
            <div className={styles.navBtn}>
                <Link to={'/PersonalAccount'} className={styles.enterBtn}><span>Войти</span></Link>
                <Link to={"/shoppingcart"}><button className={styles.basketBtn}>Корзина  |  {basketCount}</button></Link> 
            </div>
        </div>
    );
}

export default Nav;