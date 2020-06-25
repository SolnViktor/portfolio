import React from 'react';
import './Preloader.scss'


let Preloader = () => {

    return (
        <div className='preloader-container'>
            <div className='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>


    )
};

export default Preloader;