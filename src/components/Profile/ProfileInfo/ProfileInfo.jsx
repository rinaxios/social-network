import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.contentImg}>
                <img
                    src="https://st5.depositphotos.com/35914836/63547/i/1600/depositphotos_635479520-stock-photo-background-texture-old-brick-wall.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;