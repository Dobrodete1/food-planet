import React from 'react';
import styles from './Menu.module.css';
import { pricePizza } from '../../constants/main';
import StatePrice from '../NewPrice/StatePrice'

const Menu = () => {
    return (
        <>
            <div className={styles.Menu}>
                <div className={styles.Content}>
                    <h3>Меню</h3>
                    <span>Пицца</span>
                    <span>Бургер</span>
                    <span>Суши</span>
                    <span>Роллы</span>
                    <span>Салаты</span>
                    <span>Десерты</span>
                    <span>Напитки</span>
                </div>
                <div className={styles.menu_info}>
                    <p>Сортировать по: <select>По умолчанию</select></p>
                </div>
                <ul className={styles.product_list}>
                    {pricePizza.map((product) => (
                        <div className={styles.product_price}>
                            <li>
                                <img src={product.Image} alt="" />
                                <h3>{product.name}</h3>
                                <p>{product.compound}</p>
                                <h4>{product.price}</h4>
                                <StatePrice/>
                                <button className={styles.btnPrice}><b>В Корзину</b></button>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className={styles.btnMore}>
                    <button className={styles.moreBtn}>Показать еще</button>
                </div>
            </div>
        </>
    );
};

export default Menu;