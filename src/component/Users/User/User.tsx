import React from "react";
import {UsersType} from "../../../redux/usersReducer";
import classes from "./User.module.css";
import userPhoto from "../../../assets/img/images.png";
import {NavLink} from "react-router-dom";

export type UserPropsTypes = {
    user: UsersType,
    followingInProgress: number[],
    unFollow: (userId: number) => void,
    follow: (userId: number) => void

}

let User = (props: UserPropsTypes) => {
    return <div>
       <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                    <img alt={'user'} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} className={classes.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {props.unFollow(props.user.id)}}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => { props.follow( props.user.id)}}>Follow</button>
                    }

                </div>
            </span>
                <span>
                 <span>
                     <div>{props.user.name}</div>
                     <div>{props.user.status}</div>
                 </span>
                 <span><div>{"city"}</div>
                     <div>{"u.location.country"}</div>
                 </span>
            </span>
            </div>)

    </div>
}

export default User;