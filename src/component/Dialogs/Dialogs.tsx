import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionsTypes, DialogPageType, InitialStateTypeDialogs,
    SendMessageAC, UpdateNewMessageBodyAC,

} from "../../redux/dialogsReducer";
import {Redirect} from "react-router";



type DialogsPropsType = {
    dialogsPage: DialogPageType
    sendMessage:() => void
    updateNewMessageBody: (text: string) => void
    isAuth: boolean

}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/> );

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.updateNewMessageBody(text)
        }
    };
    // if(!props.isAuth) return <Redirect to={'/login'}/>


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.message}>
                <div>{messagesElements}</div>
                <div>
                 <textarea onChange={onMessageChange} ref={newMessageElement}
                           value={props.dialogsPage.newMessageBody}
                           placeholder={"Enter your message"}> </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;