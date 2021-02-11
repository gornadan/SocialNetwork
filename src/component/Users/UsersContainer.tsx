import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgress, toggleIsFetchingAC,
    unFollowAC,
    UsersType
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { usersAPI} from "../../api/api";

type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

// type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: Array<UsersType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//
// }

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)     .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged} followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}

            />
        </>

    }
}




let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingProgress: toggleFollowingProgress
})(UsersContainer);