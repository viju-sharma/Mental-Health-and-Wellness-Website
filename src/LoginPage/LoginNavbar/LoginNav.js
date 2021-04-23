import React from 'react';
import Navlink from './NavLinks/Navlink';
import classes from './LoginNav.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Nav = (props) => {

    const hover = useSelector(state => state.hover);
    const dispatch = useDispatch();

    const onHover = () => {
        dispatch({type: 'HOVER'});
    }

    const onNotHover = () => {
        dispatch({type: 'NOT_HOVER'});
    }

    return (<React.Fragment>
                <div className = {classes.Nav} onMouseOver = {onHover} onMouseOut = {onNotHover}>
                    <Navlink link = "/" show = {hover} >About</Navlink>
                    <Navlink link = "/" show = {hover} >Terms and Policies</Navlink>
                    <Navlink link = "/" show = {hover} >Vision</Navlink>
                </div>
            </React.Fragment>
        
    )
}

export default Nav;