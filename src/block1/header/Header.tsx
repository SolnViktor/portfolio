import React from "react";
import styles from "./Header.module.css"
import Nav from "./nav/Nav";

let Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Nav/>
                </div>
            </div>


        </div>
    )
};

export default Header;