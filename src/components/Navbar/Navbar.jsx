import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={ navData => navData.isActive ? s.active : NavLink }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : NavLink }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={ navData => navData.isActive ? s.active : NavLink }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={ navData => navData.isActive ? s.active : NavLink }>Music</NavLink>
            </div>
            <div className={s.border}></div>
            <div className={s.item}>
                <NavLink to="/settings" className={ navData => navData.isActive ? s.active : NavLink }>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;