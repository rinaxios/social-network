import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={ navData => navData.isActive ? s.active : NavLink }>{props.name}</NavLink>
        </div>
        )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Rinat'},
        {id: 3, name: 'Aman'},
        {id: 4, name: 'Leyla'},
        {id: 5, name: 'Tima'},
        {id: 6, name: 'Sancho'}
    ]
    let newDialogData = dialogData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} className={s.dialogsItem}/>)

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What\'s up?'},
        {id: 4, message: 'Grate'},
        {id: 5, message: 'What about you'},
        {id: 6, message: 'Same'}
    ]
    let newMessagesData = messagesData
        .map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newDialogData}
            </div>
            <div className={s.messages}>
                {newMessagesData}
            </div>
        </div>
    )
}
export default Dialogs;