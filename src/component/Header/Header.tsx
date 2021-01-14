import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.pic} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ17IautckWSx6-VDw0UI7NAMIDsEqkOZ3i5g&usqp=CAU'/>
    </header>
}

export default Header;