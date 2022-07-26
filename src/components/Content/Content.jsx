import React from 'react';
import burger from '../../img/product/burger/burger.png'
import arrow from '../../img/logo/arrowmenu.svg'
import styles from '../Content/Content.module.css'
import Price from "../NewPrice/Price";
import Questions from "../Questions/Questions";
import Reviews from "../Reviews/Reviews";
import Menu from './../Menu/Menu';

const Content = () => {
    return (
        <>
            <div>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                        <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                        <button><b>Перейти в меню</b>{/*<img src={arrow} alt="" />*/}</button>
                    </div>
                    <img src={burger} alt="" />
                </div>
                <Price />
                <Menu />
                <Questions />
                <Reviews />
            </div>
        </>
    );
};

export default Content;