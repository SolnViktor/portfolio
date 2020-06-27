import React from "react";
import styles from "./SkillItem.module.scss"


type SkillItemType = {
    changeToggle: (toggle: boolean, id: string) => void
    id: string
    skillImg: any
    name: string
    description: string
    toggle: boolean
}


let SkillItem = (props: SkillItemType) => {

    return (
        <div className={styles.skill_item}>
            <img className={styles.skill_img} src={props.skillImg} alt="logo"/>
            <h3>{props.name}
                <button className={props.toggle
                    ? styles.button
                    : `${styles.button} ${styles.active}`}
                        onClick={() => {
                            props.changeToggle(props.toggle, props.id)
                        }}
                >
                            <span className={styles.button_name}>
                                Toggle
                            </span>
                </button>
            </h3>
            <div className={props.toggle ? styles.skill_about_active : styles.skill_about_inactive}>
                {props.description}
            </div>
        </div>

    )
}

export default SkillItem;