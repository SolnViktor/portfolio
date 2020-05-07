import React from "react";
import styles from "./Skills.module.css"




let Skills = () => {
    return (
            <div className={styles.skill__item}>
                <div className={styles.skill__title}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9Pf0GZPYqlg0JRTO2pbcfjxjhf2ONVJqlDW_E_rqZ_6XAVQx3&usqp=CAU"
                        alt=""/>
                    <h3>React</h3>
                </div>
                <div className={styles.skill__about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, voluptates!</div>
            </div>

    )
}

export default Skills;