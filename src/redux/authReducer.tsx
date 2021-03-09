import React from 'react';
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA";

type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: InitialStateType
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>


export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};


let initialState = {
    id: -1,
    email: null,
    login: '',
    isAuth: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };


        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
}
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email, isAuth} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            } else {
                dispatch(setAuthUserData(-1, "", "", false))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
};

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};
