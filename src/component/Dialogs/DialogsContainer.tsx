import React, {ChangeEvent} from 'react';
import {
    DialogPageType,

    SendMessageAC, UpdateNewMessageBodyAC,

} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch, Store} from "redux";

import {AppStateType} from "../../redux/reduxStore";

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