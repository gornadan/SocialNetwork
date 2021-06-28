import React from "react";
import {UsersType} from "../../redux/usersReducer";
import Paginator from "../common/Paginator/Paginators";
import User from "./User/User";


type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

let Users = (props: UsersPropsType) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
        {
            props.users.map(u => <User user={u}
                                       key={u.id}
                                       follow={props.follow}
                                       unFollow={props.unFollow}
                                       followingInProgress={props.followingInProgress}/>)
        }
    </div>
}

export default Users;