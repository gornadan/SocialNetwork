import React from 'react';
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId?: number
    status?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    aboutMe?: string
    fullName?: string
    contacts?: ContactsType
    photos?: PhotosType

}

export type ProfileActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof SetStatus>
    | ReturnType<typeof savePhotoSuccess>

export type PostsType = {
    id: number
    likeCount: number
    message: string
}


let initialState = {
    posts: [
        {id: 1, likeCount: 215, message: "Hi!!!"},
        {id: 2, likeCount: 10, message: "Hello!!"},
        {id: 3, likeCount: 15, message: "How are you&"},
        {id: 4, likeCount: 43, message: "Good afternoon!!!"}
    ] as Array<PostsType>,
    newPostText: "it-kamasutra.com",
    profile: null as ProfileType | null,
    status: ""
}

export type InitialStateTypeProfile = typeof initialState


type AddPostACType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const AddPostAC = (newPostText: string): AddPostACType => {
    return {type: ADD_POST, newPostText}
}
type DeletePostACType = {
    type: typeof DELETE_POST,
    postId: number
}

type SavePhotoACType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const deletePostAC = (postId: number): DeletePostACType => {
    return {type: DELETE_POST, postId}
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoACType => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}


type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null

}

export const setUserProfile = (profile: ProfileType | null): SetUserProfileACType => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};
type SetStatusACType = {
    type: typeof SET_STATUS
    status: string

}

export const SetStatus = (status: string): SetStatusACType => {
    return {type: SET_STATUS, status}
};


export const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialStateTypeProfile => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                likeCount: 0,
                message: action.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state
    }
};

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(SetStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 1) {
            dispatch(SetStatus(status));
        }
    }  catch (error) {

    }
};

export const savePhoto = (file: File) => async (dispatch: (actions: ProfileActionsTypes) => void) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {

        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
         return Promise.reject(response.data.messages[0])
    }
};