import React from "react";
import classes from "./Users.module.css";
import  axios from "axios"
import {UsersType} from "../../redux/usersReducer";
import userPhoto from "../../assets/img/images.png"



type UsersPropsType = {
    users:  Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void

}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger;
                props.setUsers(response.data.items)
            })
    }


    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
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