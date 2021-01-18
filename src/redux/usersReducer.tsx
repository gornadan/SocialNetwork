import React from 'react';


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


export type UsersActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | SetUsersACType
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    isFetching: false

}
type FollowACType = {
    type: typeof FOLLOW,
    userId: number

}

export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId: userId
    }
};

type UnFollowACType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unFollowAC = (userId: number): UnFollowACType => {
    return {type: UNFOLLOW, userId}
};

type SetUsersACType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}
export const setUsersAC = (users: Array<UsersType>): SetUsersACType => {
    return {type: SET_USERS, users}
}

type SetCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

type SetTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

type ToggleIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingACType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
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
            return {...state, isFetching: action.isFetching}


        default:
            return state
    }

};
