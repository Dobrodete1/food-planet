import React from 'react'
import logo from '../../img/logo/LOgoFood-planet.svg'
import styles from './Header.module.css';
import phone from '../../img/logo/phone.svg'
import korzina from '../../img/logo/korzina.svg'
import arrow from '../../img/logo/arrow.svg'
import {Link,Outlet,Route, Routes} from 'react-router-dom';
import {Delivery} from '../../page/Delivery/Delivery.jsx'

const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <img src={logo} alt="" />
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/menu" >Меню<img src={arrow} alt="" /></Link></li>
        <li><Link to='/delivery'>Доставка</Link></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#"><img src={phone} alt="" />+996500405988</a></li>
        <li><a href="#"><img src={korzina} alt="" /> 1</a></li>
      </ul>
    </header>
    <Outlet />
    </>
  )
}

export default Header