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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id="1" name="Alex" className={s.dialogsItem}/>
                <DialogItem id="2" name="Rinat" className={s.dialogsItem}/>
                <DialogItem id="3" name="Aman" className={s.dialogsItem}/>
                <DialogItem id="4" name="Leyla" className={s.dialogsItem}/>
                <DialogItem id="5" name="Tima" className={s.dialogsItem}/>
                <DialogItem id="6" name="Sancho" className={s.dialogsItem}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="What's up?" />
                <Message message="Grate" />
                <Message message="What about you" />
                <Message message="Same" />
            </div>
        </div>
    )
}
export default Dialogs;