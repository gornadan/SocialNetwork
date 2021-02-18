import React from 'react';
import {
    DialogPageType,

    SendMessageAC, UpdateNewMessageBodyAC,

} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";

import {AppStateType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/withAuthRedidrect";

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
};

export default compose <React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
//
//
// export default DialogsContainer;