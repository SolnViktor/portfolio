import React, {ChangeEvent, useState} from 'react';
import styles from './Contacts.module.scss'
import axios from 'axios'
import Preloader from '../common/preloader/Preloader';
import {AlertSuccessful} from '../common/MU_Alerts/Alert-successful';
import {AlertError} from '../common/MU_Alerts/Alert-error';


let Contacts = () => {
    const initialForm = {name: '', contacts: '', message: ''}
    const [formData, setFormData] = useState(initialForm)
    const [isFetching, setIsFetching] = useState(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [isSuccesfull, setIsSuccesfull] = useState(false)

    const onSubmit = () => {
        if (formData.contacts === ''
            || formData.message === ''
            || formData.name === '') {
            setIsError(true)
        } else {
            sendMessage()
        }
    }

    const sendMessage = () => {
        setIsFetching(true)
        axios.post('https://smtp-gmail-nodejs-server.herokuapp.com/sendMessage', formData)
            .then((response) => {
                setIsFetching(false)
                setIsSuccesfull(true)
                setTimeout(() => {
                    setIsSuccesfull(false)
                }, 4000)
                setFormData({...formData, name: '', message: '', contacts: ''})
                console.log(response)
            })
            .catch((error) => {
                setIsFetching(false)
            })

    }
    const fieldCommonSettings = (value: string, fieldName: any) => {  //принимает значения и наименования 3х полей формы
        setIsError(false)
        setFormData({...formData, [fieldName]: value})
    }
    const onChangeNameField = (e: ChangeEvent<HTMLInputElement>) => {
        fieldCommonSettings(e.currentTarget.value, ['name'])
    }
    const onChangeContactsField = (e: ChangeEvent<HTMLInputElement>) => {
        fieldCommonSettings(e.currentTarget.value, ['contacts'])
    }
    const onChangeMessageField = (e: ChangeEvent<HTMLTextAreaElement>) => {
        fieldCommonSettings(e.currentTarget.value, ['message'])
    }
    const btnClass = isFetching || isError ? `${styles.button} ${styles.button_disabled}`
        : `${styles.button} ${styles.button_default}`

    return (
        <div className={styles.contacts} id="contacts">
            {isFetching && <Preloader/>}
            <AlertSuccessful isSuccesfull={isSuccesfull}/> {/*transition MU*/}
            <div className={styles.container}>
                <h2 className={styles.title}>Contacts</h2>
                <div className={styles.contacts_form}>
                    <AlertError isError={isError}/> {/*transition MU*/}
                    <input onChange={onChangeNameField} value={formData.name} type="text" placeholder="Your name"/>
                    <input onChange={onChangeContactsField} value={formData.contacts} type="text"
                           placeholder="Your contacts"/>
                    <textarea onChange={onChangeMessageField} value={formData.message} rows={11} cols={45} name="" id=""
                              placeholder="Text"/>
                    <div>
                        <button
                            className={btnClass}
                            disabled={isFetching || isError}
                            onClick={onSubmit}>Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Contacts;