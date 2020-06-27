import React, {useState} from "react";
import styles from "./MySkills.module.scss"
import SkillItem from "./skills/SkillItem"
import react from './img/react .png'
import js from './img/js.png'
import html from './img/html.png'
import {v1} from "uuid";


let MySkills = () => {


    let [skills, setSkills] = useState ([
        {
            id: v1(),
            img: html,
            name: 'HTML, CSS',
            toggle: true,
            description: 'HTML/HTML5, CSS, знаю семантические теги, Flexbox, Grid CSS и препроцессор SASS. Умею адаптивно и валидно верстать.',
        },
        {
            id: v1(),
            img: js,
            name: 'Java Script',
            toggle: false,
            description: 'Знаю основы, могу писать несложные скрипты на JS. Применяю синтаксис ES6.',
        },
        {
            id: v1(),
            img: react,
            name: 'React, Redux',
            toggle: false,
            description: 'Понимаю логику построения React приложений и методы жизненного цикла компонентов. Использовал react hooks, работал с react router, styled components и modules css. Работал с redux, а также с redux-thunk. Умею работать со сторонними API',
        }
    ])




    let changeToggle = (toggle: boolean, id: string) => {

       let skill = skills.find( s => s.id === id);
       if (skill) {
           skill.toggle === true ? skill.toggle = false : skill.toggle = true;
       }
        setSkills([...skills])
    };

    return (
        <div className={styles.mySkills} id="skills">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}><h2>My Skills</h2></div>
                    <div className={styles.skills}>
                        {skills.map(s => {

                            return (
                                <SkillItem
                                    key={s.id}
                                    id={s.id}
                                    changeToggle={changeToggle}
                                    skillImg={s.img}
                                    name={s.name}
                                    description={s.description}
                                    toggle={s.toggle}

                                />
                            )
                        })
                        }


                    </div>


                </div>
            </div>
        </div>


    )
};

export default MySkills;