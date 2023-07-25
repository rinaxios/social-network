import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog + ' ' + s.active}>Rinat</div>
                <div className={s.dialog}>Aman</div>
                <div className={s.dialog}>Leyla</div>
                <div className={s.dialog}>Tima</div>
                <div className={s.dialog}>Sancho</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>Grate</div>
                <div className={s.message}>What about you</div>
                <div className={s.message}>Same</div>
            </div>
        </div>
    )
}
export default Dialogs;