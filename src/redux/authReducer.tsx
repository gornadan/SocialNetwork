import React from 'react';
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {stopSubmit} from "redux-form";



const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: InitialStateType
}

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    data: InitialStateType
}
export type ActionsTypes = ReturnType<typeof setAuthUserData>


export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl?: string | null

};


let initialState = {
    id: -1,
    email: null,
    login: '',
    isAuth: false,
    captchaUrl: null

}


export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case GET_CAPTCHA_URL_SUCCESS:
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
type GetCaptchaUrlSuccessACType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    data: {
        captchaUrl: string
    }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessACType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        data: {captchaUrl}
    }
}
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email, isAuth} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        dispatch(setAuthUserData(-1, "", "", false));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    //@ts ignore
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else  {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
