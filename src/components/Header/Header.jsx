import React from 'react'
import css from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
    return <header className={css.header}>
        <img className='logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        <div className={css.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header