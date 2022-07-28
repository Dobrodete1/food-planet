import React from 'react';
import styles from './Questions.module.css';
import { question } from '../../constants/main';

const Questions = () => {
    return (
        <div className={styles.questions}>
            <div className={styles.w_me}><h3>Почему выбирают нас:</h3></div>
            <ul className={styles.ques_profile}>
                {question.map((index) => (
                    <div className={styles.ques_list}>
                        <li>
                            <img src={index.logo} alt="" />
                            <h4>{index.theme}</h4>
                            <p>{index.desc}</p>
                        </li>
                    </div>  
                ))}
            </ul>
            
        </div>
    );
};

export default Questions;