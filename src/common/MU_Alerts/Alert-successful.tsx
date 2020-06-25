import React from 'react';
import styles from './Alert-succesfull.module.scss'
import Alert from '@material-ui/lab/Alert';
import {Slide} from '@material-ui/core';

type AlertSuccesfullType = {
    isSuccesfull: boolean
}
export function AlertSuccessful(props: AlertSuccesfullType) {

    return (
        <div className={styles.container}>
            <Slide timeout={{enter: 700, exit: 300}} direction="right"
                   in={props.isSuccesfull} mountOnEnter unmountOnExit>
                <Alert severity="success">Your message was successfully delivered.
                    Thank you for your attention to my candidacy. I'll contact you later.
                </Alert>
            </Slide>

        </div>
    )
}

