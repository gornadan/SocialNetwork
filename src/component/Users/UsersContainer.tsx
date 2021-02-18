import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage, toggleFollowingProgress, unFollow,
    unFollowSuccess,
    UsersType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";


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
    setCurrentPage: (currentPage: number) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        debugger
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}


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
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsers
})(UsersContainer);