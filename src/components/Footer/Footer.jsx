import React from 'react';
import styles from './Footer.module.css'
import phone from '../../img/logo/phone.svg'
import korzina from '../../img/logo/korzina.svg'
import arrow from '../../img/logo/arrow.svg'
import logo from '../../img/logo/LOgoFood-planet.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="" />
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Меню<img src={arrow} alt="" /></a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#"><img src={phone} alt="" />+996500405988</a></li>
            </ul>
        </footer>
    );
};

export default Footer;