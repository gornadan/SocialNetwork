import React from 'react';
import {SendMessageAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";

type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: InitialStateType

}

export type ActionsTypes = ReturnType<typeof setAuthUserData>


export type InitialStateType = {
    id: number| null
    email: string | null
    login: string |null
    isAuth: boolean

};


let initialState = {
    id: -1,
    email: null,
    login: '',
    isAuth: false
}





export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType=> {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };


        default:
            return state;
    }
}

export const setAuthUserData = (id: number| null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
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

export  const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email, isAuth} = response.data.data
                dispatch(setAuthUserData(id, email, login, isAuth))
            }
        })
}

