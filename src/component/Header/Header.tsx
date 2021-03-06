import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return <header className={classes.header}>
        <img alt={"img"} className={classes.pic} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU'/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;