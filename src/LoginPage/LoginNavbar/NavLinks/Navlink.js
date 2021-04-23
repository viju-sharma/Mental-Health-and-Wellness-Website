import React from 'react';
import classes from './Navlink.module.css';

const Navlink = (props) => {

    return (
        <li className = {classes.Navlinklist}>
            <a href = {props.link} className = {props.show === 1 ? [classes.show, classes.Navlink].join(' ') : [classes.hide, classes.Navlink].join(' ')}>
                {props.children}
            </a>
        </li>
    )
}

export default Navlink;