import React from 'react';
import css from './Nav.module.css';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
    
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive? css.activeLink : null}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={(navData) => navData.isActive? css.activeLink : null}>Message</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" className={(navData) => navData.isActive? css.activeLink : null}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" className={(navData) => navData.isActive? css.activeLink : null}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" className={(navData) => navData.isActive? css.activeLink : null}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" className={(navData) => navData.isActive? css.activeLink : null}>Settings</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/" className={(navData) => navData.isActive? css.activeLink : null}>Friends</NavLink>
            </div>
        </nav>
    );
}
export default Nav;