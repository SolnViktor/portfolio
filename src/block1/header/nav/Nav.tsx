import React from "react";
import styles from "./Nav.module.css"

let Nav = () => {
return (
    <div className={styles.nav}>
        <a href="#">Главная</a>
        <a href="#">Скилы</a>
        <a href="#">Проекты</a>
        <a href="#">Контакты</a>

    </div>
)
};

export default Nav;