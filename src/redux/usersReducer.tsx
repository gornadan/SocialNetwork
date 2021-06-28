import React from 'react';
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


export type UsersActionsTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UsersType = {
    name: string
    id: number
    followed: boolean
    status: string | null
    photos: { small: string, large: string }
    uniqueUrlName: null | string
}

export type InitialStateTypeUsers = typeof initialState


let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}
type FollowACType = {
    type: typeof FOLLOW,
    userId: number

}

export const followSuccess = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId: userId
    }
};

type UnFollowACType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unFollowSuccess = (userId: number): UnFollowACType => {
    return {type: UNFOLLOW, userId}
};

type SetUsersACType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersACType => {
    return {type: SET_USERS, users}
}

type SetCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

type SetTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACType => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

type ToggleIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};

type toggleFollowingProgressACType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressACType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}


export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsTypes): InitialStateTypeUsers => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u


                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case  TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };


        default:
            return state
    }

};

export const getUsers = (currentPage: number, pageSize: number) => {

    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.follow(userId);

        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))

    };
}
export const unFollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.unFollow(userId);

        if (response.data.resultCode === 0) {
            dispatch(unFollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}
