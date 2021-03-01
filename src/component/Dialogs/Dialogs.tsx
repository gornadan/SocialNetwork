import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
     DialogPageType

} from "../../redux/dialogsReducer";

import {Field, InjectedFormProps,  reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogsPage: DialogPageType
    sendMessage: (newMessageBody: string) => void
    updateNewMessageBody: (text: string) => void
    isAuth: boolean

}
type AddMessageFormType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }

    // let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     if (newMessageElement.current) {
    //         let text = newMessageElement.current.value
    //         props.updateNewMessageBody(text)
    //     }
    // };
    // if(!props.isAuth) return <Redirect to={'/login'}/>

    let addMessage = (data: AddMessageFormType) => {
        props.sendMessage(data.newMessageBody)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.message}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addMessage} />
            </div>

        </div>
    )
};


const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'textarea'}
                        name={'newMessageBody'}
                        placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;