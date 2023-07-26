import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={ navData => navData.isActive ? s.active : NavLink }>{props.name}</NavLink>
        </div>
        )
}

const Messages = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem id="1" name="Alex" className={s.dialogsItem}/>
                <DialogsItem id="2" name="Rinat" className={s.dialogsItem}/>
                <DialogsItem id="3" name="Aman" className={s.dialogsItem}/>
                <DialogsItem id="4" name="Leyla" className={s.dialogsItem}/>
                <DialogsItem id="5" name="Tima" className={s.dialogsItem}/>
                <DialogsItem id="6" name="Sancho" className={s.dialogsItem}/>
            </div>
            <div className={s.messages}>
                <Messages message="Hi" />
                <Messages message="Hello" />
                <Messages message="What's up?" />
                <Messages message="Grate" />
                <Messages message="What about you" />
                <Messages message="Same" />
            </div>
        </div>
    )
}
export default Dialogs;