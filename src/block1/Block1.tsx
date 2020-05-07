import React from "react";
import styles from "./Block1.module.css"
import foto from "./photo/photo.jpg"
import Header from "./header/Header";



let Block1 = () => {
    return (
        <div className={styles.block1}>
            <Header/>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h3>Привет</h3>
                            <h2>Меня зовут Солнцев Виктор</h2>
                            <p>Я Front-End разработчик</p>
                        </div>

                        <div className={styles.img}>
                            <img src={foto} alt="my_photo"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
};

export default Block1;