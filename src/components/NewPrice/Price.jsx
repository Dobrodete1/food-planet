import React from 'react';
import styles from './Price.module.css';
import { priceBurger } from '../../constants/main.js';
import StatePrice from './StatePrice';
import { Link } from 'react-router-dom';

const Price = () => {
    return (
        <>
            <div className={styles.price}>
                <div className={styles.priceName}>
                    <h3>Новинки</h3>
                    <span>Пицца</span>
                    <span>Бургер</span>
                    <span>Суши</span>
                    <span>Роллы</span>
                    <span>Салаты</span>
                    <span>Десерты</span>
                    <span>Напитки</span>
                </div>
                <ul className={styles.productPrice}>
                    {priceBurger.map((product) => (
                        <div className={styles.priceProduct}>
                            <li>
                                <img src={product.burger} alt="" />
                                <h3>{product.name}</h3>
                                <p>{product.compound}</p>
                                <h4>{product.price}</h4>
                                <StatePrice/>
                                <button className={styles.btnPrice}><b>В Корзину</b></button>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Price;