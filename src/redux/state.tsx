import React from "react";
import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {ActionsTypes, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

type sidebar = {}

export type PostsType = {
    id: number
    likeCount: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: sidebar
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _onChange: () => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    updateNewMessage: (newMessage: string) => void
    sendMessage: (sendMessages: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ProfileActionsTypes | ActionsTypes) => void
}




let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 215, message: "Hi!!!"},
                {id: 2, likeCount: 10, message: "Hello!!"},
                {id: 3, likeCount: 15, message: "How are you&"},
                {id: 4, likeCount: 43, message: "Good afternoon!!!"}
            ],
            newPostText: "it-kamasutra.com"
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Natallia"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Ksenya"},
                {id: 4, name: "Danila"}
            ],
            messages: [
                {id: 1, message: "Hi!!!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo-Yo-Yo!!!"},
                {id: 4, message: "Yo-Yo-Yo!!!"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log("Hello!!!")
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            likeCount: 0,
            message: postMessage
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange()
    },
    updateNewMessage(newMessage: string) {
        this._state.dialogPage.newMessageBody = newMessage;
        this._onChange()
    },
    sendMessage (sendMessages: string) {
         this._state.dialogPage.newMessageBody = sendMessages;
        this._state.dialogPage.messages.push({id: 6, message: sendMessages});
        this._state.dialogPage.newMessageBody = '';
        this._onChange()
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._onChange()

        // if (action.type === "ADD_POST") {
        //     let newPost = {
        //         id: 5,
        //         likeCount: 0,
        //         message: action.postMessage
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._onChange()
        // } else if (action.type === "UPDATE_NEW_POST_TEXT") {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._onChange()
        // } else if (action.type === "UPDATE_NEW_MESSAGE_BODY_TEXT") {
        //     this._state.dialogPage.newMessageBody = action.newMessage;
        //     this._onChange()
        // } else if (action.type === "SEND_MESSAGE") {
        //     let body = this._state.dialogPage.newMessageBody;
        //     this._state.dialogPage.messages.push({id: 6, message: body});
        //     this._state.dialogPage.newMessageBody = "";
        //     this._onChange()
        // }
    }
}


export default store;

