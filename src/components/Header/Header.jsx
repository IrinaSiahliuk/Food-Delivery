import React from 'react';

import styles from 'components/Header/styles.module.css';
import Logo from 'assets/HeaderImg/Logo.svg';
import Star from 'assets/HeaderImg/Star.png';
import Nav from 'components/Nav/Nav';


function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <img classname={styles.logoImg} src={Logo} />
                    <div className={styles.logoTitles}>
                        <div className={styles.logoTitle}>YA BAO</div>
                        <div className={styles.logoSubtitle}>дух китайской еды</div>
                    </div>
                </div>
                <div className={styles.delivery}>
                    <div className={styles.deliveryTitle}>
                        Доставка пасты
                        <p className={styles.deliveryCity}>Москва</p>
                    </div>
                    <div className={styles.deliverySubtitle}>
                        Время доставки
                        <div class={styles.circle}></div>
                        от 31 мин
                        <div class={styles.circle}></div>
                        4.8
                        <img className={styles.starImg} src={Star} />
                    </div>
                </div>
                <div className={styles.contacts}>
                    <button className={styles.contactsBtn}>Заказать звонок</button>
                    <div className={styles.number}>8 800 333-36-62</div>
                </div>
            </div>
            <Nav basketCount={0}/>
        </div>
    );
}

export default Header;