import React from "react";
import styles from "./ProjectItem.module.scss"


type ProjectItemType = {
    name: string
    img: any
    url: string
}

let ProjectItem = (props: ProjectItemType) => {
    return (
            <div className={styles.project_item}>
                <div className={styles.project}>
                    <img src={props.img} alt="project"/>
                    <a href={props.url}>Follow</a>
                </div>

                <div className={styles.project_about}>
                    <h3>{props.name}</h3>
                </div>
            </div>

    )
};

export default ProjectItem;