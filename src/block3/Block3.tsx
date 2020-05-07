import React from "react";
import styles from "./Block3.module.css"
import Project from "./projects/Project";



let Block3 = () => {
    return (
        <div className={styles.block3}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.skills}>
                        <h2>Мои проекты</h2>
                    </div>
                    <div className={styles.skills__all}>
                        <Project />
                        <Project />

                    </div>





                </div>
            </div>
        </div>



    )
};

export default Block3;