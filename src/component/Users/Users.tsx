import React from "react";
import {UsersType} from "../../redux/usersReducer";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/images.png";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    // followSuccess: (userId: number) => void
    //  unFollowSuccess: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
     follow: (userId: number) => void
     unFollow: (userId: number) => void
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {

                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={p === props.currentPage ? classes.selectedPage : ""}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.unFollow( u.id)}}>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => { props.follow( u.id)}}>Follow</button>
                    }

                </div>
            </span>
                <span>
                 <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                 </span>
                 <span><div>{"city"}</div>
                     <div>{"u.location.country"}</div>
                 </span>
            </span>
            </div>)
        }</div>
}

export default Users;