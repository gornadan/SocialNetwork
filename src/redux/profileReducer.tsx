import React from 'react';


const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type ProfileActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>

export type PostsType = {
    id: number
    likeCount: number
    message: string
}

export type InitialStateTypeProfile = typeof initialState
// posts: Array<PostsType>
// newPostText: string


let initialState = {
    posts: [
        {id: 1, likeCount: 215, message: "Hi!!!"},
        {id: 2, likeCount: 10, message: "Hello!!"},
        {id: 3, likeCount: 15, message: "How are you&"},
        {id: 4, likeCount: 43, message: "Good afternoon!!!"}
    ] as Array<PostsType>,
    newPostText: "it-kamasutra.com" as string
}
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



export const profileReducer = (state = initialState, action: any): InitialStateTypeProfile => {
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
        default:
            return state
    }

}