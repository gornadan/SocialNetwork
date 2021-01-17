import React from 'react';


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"


export type UsersActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | SetUsersACType

export type UsersPageType = {
    users: Array<UsersType>
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
    users: [
    //     {
    //     name: "s",
    //     id: 3,
    //     followed: false,
    //     status: "",
    //     photos: {small: "", large: ""},
    //     uniqueUrlName: ""
    // }
    ]

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
            return {...state, users: [...state.users, ...action.users]};


        default:
            return state
    }

};

