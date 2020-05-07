import React from "react";
import styles from "./Block2.module.css"
import Skills from "./skills/Skills";



let Block2 = () => {
    return (
        <div className={styles.block2}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.skills}><h2>Мои скилы</h2></div>
                    <div className={styles.skills__all}>
                        <Skills />
                        <Skills />
                        <Skills />
                    </div>





                </div>
            </div>
        </div>



    )
};

export default Block2;