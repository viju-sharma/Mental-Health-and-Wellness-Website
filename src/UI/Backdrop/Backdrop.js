import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) =>{

    return (
        <div className = {props.show === 1 ? classes.show : classes.hide}>

        </div>
    )
}

export default Backdrop;