import React from "react"
import Preloader from "../../common/Preloader/Preloader"
import css from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={css.avataritem}>
                <img className={css.avatar} src='https://envybox.io/blog/wp-content/uploads/2020/07/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D1%81%D0%BE%D1%86%D1%81%D0%B5%D1%82%D0%B5%D0%B9-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0.png' />
            </div>
            <div>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}


export default ProfileInfo;