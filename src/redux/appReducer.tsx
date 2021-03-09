import React from 'react';
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
};

export type ActionsTypes = ReturnType<typeof initializedSuccess>


export type InitialStateType = {
    initialized: boolean
};


let initialState = {
    initialized: false
};

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType=> {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = (): InitializedSuccessType => {
    return {type: INITIALIZED_SUCCESS }
};
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export  const initializeApp = ():ThunkType => (dispatch) => {
   let promise =  dispatch( getAuthUserData());
    Promise.all([promise]).then(() => {dispatch(initializedSuccess())})
};

