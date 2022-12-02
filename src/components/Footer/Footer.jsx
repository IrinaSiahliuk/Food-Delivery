import React from 'react';

import styles from 'components/Footer/styles.module.css';
import Logo from 'assets/FooterImg/Logo.svg';
import Visa from 'assets/FooterImg/Visa.svg';
import PayPal from 'assets/FooterImg/PayPal.svg';
import MasterCard from 'assets/FooterImg/MasterCard.svg';
import Viber from 'assets/FooterImg/Viber.png';
import Skype from 'assets/FooterImg/Skype.png';
import Messenger from 'assets/FooterImg/Messenger.png';
import Telegram from 'assets/FooterImg/Telegram.png';
import Facebook from 'assets/FooterImg/Facebook.png';
import Vk from 'assets/FooterImg/Vk.png';

function Footer() {
    return (
        <div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3380.4689084394304!2d27.458107288618564!3d53.85948735237695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1669894231757!5m2!1sru!2sby" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className={styles.footerItems}>
                <div className={styles.footerItem}>
                    <div className={styles.logoWrapper}>
                        <img classname={styles.logoImg} src={Logo} />
                        <div className={styles.logoTitles}>
                            <div className={styles.logoTitle}>YA BAO</div>
                            <div className={styles.logoSubtitle}>дух китайской еды</div>
                        </div>
                    </div>
                    <div className={styles.footerInfo}>
                        <div className={styles.caloricAndRights}>
                            <p>Калорийность и состав</p>
                            <p>Правовая информация</p>
                        </div>
                        <p className={styles.social}>
                            Мы в соцсетях
                        </p>
                        <div className={styles.footerSocial}>
                            <div className={styles.youTubeAndInstagram}>
                                <p>YouTube</p>
                                <p>Instagram</p>
                            </div>
                            <div className={styles.facebookAndVk}>
                                <p>Facebook</p>
                                <p>Вконтакте</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerRights}>
                        <div className={styles.rightsReserved}>YaBao Все права защищены © 2022</div>
                        <div className={styles.cards}>
                            <img classname={styles.cardImg} src={Visa} />
                            <img classname={styles.cardImg} src={PayPal} />
                            <img classname={styles.cardImg} src={MasterCard} />
                        </div>
                    </div>
                </div>
                <div className={styles.feedback}>
                    <p className={styles.feedbackTitle}>Остались вопросы? А мы всегда на связи:</p>
                    <div className={styles.feedbackBtnWrapper}>
                        <button className={styles.feedbackBtn}>
                            <img src={Viber} />
                        </button>
                        <button className={styles.feedbackBtn}>
                            <img src={Skype} />
                        </button>
                        <button className={styles.feedbackBtn}>
                            <img src={Messenger} />
                        </button>
                        <button className={styles.feedbackBtn}>
                            <img src={Telegram} />
                        </button>
                        <button className={styles.feedbackBtn}>
                            <img src={Facebook} />
                        </button>
                        <button className={styles.feedbackBtn}>
                            <img src={Vk} />
                        </button>
                        <button className={styles.writeToUsBtn}>
                            <p>Написать нам</p>
                        </button>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.number}>8 800 333-36-62</div>
                        <button className={styles.contactsBtn}>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;