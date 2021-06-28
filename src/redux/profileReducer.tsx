import React from 'react';
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = "ADD_POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

type ContactsType = {
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
    userId: number
    status: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}

export type ProfileActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof deletePostAC>
    // | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof SetStatus>

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
export const deletePostAC = (postId: number): DeletePostACType => {
    return {type: DELETE_POST, postId}
}

// type UpdateNewPostTextACType = {
//     type: typeof UPDATE_NEW_POST_TEXT
//     newText: string
// }

// export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextACType => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: newText
//     }
// };

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
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // }
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
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 1) {
        dispatch(SetStatus(status));
    }
};