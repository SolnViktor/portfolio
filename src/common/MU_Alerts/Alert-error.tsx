import React from 'react';
import styles from'./Alert-error.module.scss'
import Alert from '@material-ui/lab/Alert';
import {Slide} from '@material-ui/core';

type AlertErrorType = {
    isError: boolean
}

export function AlertError(props: AlertErrorType) {

    return (
        <div className={styles.container}>
            <Slide timeout={{enter: 700, exit: 300}} direction="right" in={props.isError} mountOnEnter unmountOnExit>
                <Alert severity="error">Some field is empty. Enter your message and try again.</Alert>
            </Slide>
        </div>



    )
}

