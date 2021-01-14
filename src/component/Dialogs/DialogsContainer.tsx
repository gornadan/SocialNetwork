import React, {ChangeEvent} from 'react';
import {

    SendMessageAC, UpdateNewMessageBodyAC,

} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch, Store} from "redux";
import {DialogPageType} from "../../redux/state";
import {AppStateType} from "../../redux/reduxStore";


// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState();
//
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(SendMessageAC(state.newMessageBody))
//                     }
//
//                     let onMessageChange = (text: string) => {
//                         store.dispatch(UpdateNewMessageBodyAC(text))
//                     }
//
//                     return (
//                         <Dialogs
//                                  dialogsPage={state.dialogsPage}
//                                  updateNewMessageBody={onMessageChange}
//                                  sendMessage={onSendMessageClick}
//                                  // newMessageBody={state.dialogsPage.newMessageBody}
//                         />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
type MapStateToPropsType = {
    dialogsPage: DialogPageType
}

type MapDispatchToPropsType = {
    sendMessage:() => void
    updateNewMessageBody: (text: string) => void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(SendMessageAC())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(UpdateNewMessageBodyAC(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;