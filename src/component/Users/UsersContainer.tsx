import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";
import Users from "./Users";



type MapStateToPropsType = {
    users: Array<UsersType>
}

type MapDispatchToPropsType = {
    follow:(userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users:Array<UsersType>) => void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
       follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;