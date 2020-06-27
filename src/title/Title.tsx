import React from "react";
import styles from "./Title.module.scss"
import Nav from "./navigation/Nav";



let Title = () => {

    return (
        <div className={styles.title} id="main">
            <Nav />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h1>Solntsev Viktor</h1>
                            <h1>React Front-End developer</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
};

export default Title;