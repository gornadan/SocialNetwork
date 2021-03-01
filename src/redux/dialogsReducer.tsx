import React from 'react';
import {string} from "prop-types";



const SEND_MESSAGE = "SEND_MESSAGE";


export type ActionsTypes = ReturnType<typeof SendMessageAC>

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


export type InitialStateTypeDialogs = typeof initialState;


let initialState = {
    dialogs: [
        {id: 1, name: "Natallia"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Ksenya"},
        {id: 4, name: "Danila"}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi!!!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo-Yo-Yo!!!"},
        {id: 4, message: "Yo-Yo-Yo!!!"}
    ] as Array<MessagesType>,
    newMessageBody: "" as string
}

// type UpdateNewMessageBodyACType = {
//     type: typeof UPDATE_NEW_MESSAGE_BODY_TEXT
//     newMessage: string
// }

// export const UpdateNewMessageBodyAC = (newMessage: string): UpdateNewMessageBodyACType => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY_TEXT,
//         newMessage: newMessage
//     }
// }

type SendMessageACType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const SendMessageAC = (newMessageBody: string): SendMessageACType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    }
}

export const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateTypeDialogs => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY_TEXT:
        //    return {
        //         ...state,
        //         newMessageBody: action.newMessage
        //     };

        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                // newMessageBody: ""
            };



        default:
            return state;
    }
}