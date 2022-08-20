import React from 'react';
import styles from './Footer.module.css'
import phone from '../../img/logo/phone.svg'
import korzina from '../../img/logo/korzina.svg'
import arrow from '../../img/logo/arrow.svg'
import logo from '../../img/logo/LOgoFood-planet.svg'
import { Link, Outlet, Route, Routes } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/menu" >Меню<img src={arrow} alt="" /></Link></li>
                <li><Link to='/delivery'>Доставка</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><a href="#"><img src={phone} alt="" />+996500405988</a></li>
            </ul>
        </footer>
    );
};

export default Footer;