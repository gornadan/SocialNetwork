import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";



type DialogItemPropsType = {
    name: string
    id: number
}




const DialogItem = (props: DialogItemPropsType) => {
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={"/dialogs/1" + props.id}>{props.name}</NavLink>
    </div>
}




export default DialogItem;