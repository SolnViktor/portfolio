import React from "react";
import styles from "./Block5.module.css"



let Block5 = () => {
    return (
        <div className={styles.block5}>
            <div className={styles.container}>
                <h2>Контакты</h2>
                <form className={styles.contacts}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="contact e-mail" />

                    <textarea rows={11} cols={45} name="" id="">  </textarea>
                    <div className={styles.button}>
                        <input type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        </div>


    )
};

export default Block5;