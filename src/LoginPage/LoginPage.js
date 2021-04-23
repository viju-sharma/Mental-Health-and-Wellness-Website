import React from 'react';
import LoginNav from './LoginNavbar/LoginNav';
import Backdrop from '../UI/Backdrop/Backdrop';
import {useSelector} from 'react-redux';
import classes from './LoginPage.module.css';

const LoginPage = (props) => {

    const hover = useSelector(state => state.hover);

    return (
        <div className = {classes.div}>
            <Backdrop show = {hover} />
            <LoginNav />
        </div>
            
    )
}

export default LoginPage;