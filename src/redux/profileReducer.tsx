import React from 'react';


const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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

type PhotosType  = {
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
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>

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
    profile: null as ProfileType | null
}

export type InitialStateTypeProfile = typeof initialState



type AddPostACType = {
    type: typeof ADD_POST
}
export const AddPostAC = (): AddPostACType => {
    return {type: ADD_POST}
}

type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextACType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
};

type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType | null

}

export const setUserProfileAC = (profile: ProfileType | null ): SetUserProfileACType => {
    return {
        type: SET_USER_PROFILE,
        profile: profile

    }
};


export const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialStateTypeProfile => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                likeCount: 0,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}