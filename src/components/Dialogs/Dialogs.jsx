import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" className={ navData => navData.isActive ? s.active : NavLink }>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" className={ navData => navData.isActive ? s.active : NavLink }>Rinat</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" className={ navData => navData.isActive ? s.active : NavLink }>Aman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" className={ navData => navData.isActive ? s.active : NavLink }>Leyla</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" className={ navData => navData.isActive ? s.active : NavLink }>Tima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6" className={ navData => navData.isActive ? s.active : NavLink }>Sancho</NavLink>
                </div>
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