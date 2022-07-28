import React from 'react';
import styles from './Reviews.module.css';
import { reviews } from '../../constants/main';

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <h2>Отзывы</h2>
            <ul className={styles.review_desc}>
                {reviews.map((review) => (
                    <div className={styles.review_list}>
                        <li>
                            <img src={review.userImg} alt="" />
                            <h3>{review.userName}</h3>
                            <p className={styles.p_desc}>{review.desc}</p>
                            <p className={styles.p_date}>{review.date}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;