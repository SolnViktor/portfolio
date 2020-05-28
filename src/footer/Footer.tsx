import React from "react";
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVk, faGithubAlt, faViber, faTelegram} from "@fortawesome/free-brands-svg-icons";



let Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2>Solntsev Viktor</h2>
                <div className={styles.tel}>Tel <span className={styles.tel__inner}>+7 917 825 83 46</span></div>
                <div className={styles.mail}>e-mail: <span className={styles.email__inner}>solnseviktor@gmail.com</span></div>
                <div className={styles.contacts}>
                    <div className={styles.link}>
                        <a href="https://vk.com/id12147639" target="_blank">
                            <FontAwesomeIcon className={styles.icon} icon={faVk} />
                        </a>
                    </div>

                    <div className={styles.link}>
                        <a href="https://github.com/SolnViktor" target="_blank">
                            <FontAwesomeIcon className={styles.icon} icon={faGithubAlt} />
                        </a>
                    </div>

                    <div className={styles.link}>
                        <a href="https://account.viber.com/en/account/" target="_blank">
                            <FontAwesomeIcon className={styles.icon} icon={faViber} />
                        </a>
                    </div>

                    <div className={styles.link}>
                        <a href="https://t.me/SolnViktor" target="_blank">
                            <FontAwesomeIcon className={styles.icon} icon={faTelegram} />
                        </a>
                    </div>


                </div>

                <div className={styles.copyright}>
                    &copy; All rights reserved
                </div>

            </div>
        </div>


    )
};

export default Footer;