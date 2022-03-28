import React from "react";
import css from './UsersCSS.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from "react-router-dom";
let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt="avatarka" src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={css.usersPhoto} />
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            unFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div className={css.text}>{user.name}</div>
                    <div className={css.text}>{user.status}</div>
                </span>
                <span>
                    <div className={css.text}>{"u.location.country"}</div>
                    <div className={css.text}>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}
export default User