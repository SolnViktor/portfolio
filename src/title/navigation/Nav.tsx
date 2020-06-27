import React, {useState} from "react";
import styles from "./Nav.module.scss";
import { Link} from "react-scroll";


let Nav = () => {


    let [toggle, setToggle] = useState('active')
    let buttonHandler = () => {
        if (toggle === 'inActive') {
            setToggle('active')
        } else setToggle('inActive')
    }

    return (
        <>
            <div className={toggle === 'active' ? styles.nav : styles.nav_active }>
                <Link smooth={true} onClick={buttonHandler} className={styles.nav_item} to='main'>Main</Link>
                <Link smooth={true} onClick={buttonHandler} className={styles.nav_item} to='skills'>Skills</Link>
                <Link smooth={true} onClick={buttonHandler} className={styles.nav_item} to='projects'>Projects</Link>
                <Link smooth={true} onClick={buttonHandler} className={styles.nav_item} to='contacts'>Contacts</Link>
            </div>
            <button onClick={buttonHandler}
                    className={toggle === 'active' ? styles.toggle : `${styles.toggle} ${styles.active}`}
                    type="button">

                <span className={styles.toggle_item}>Menu</span>
            </button>
        </>
    )
};

export default Nav;