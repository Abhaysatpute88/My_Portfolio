import React from 'react';
import {  NavLink } from 'react-router-dom';
import style from "../css/Navbar.module.css";


const Navbar = () => {
    return (
        <nav>
            <ul className={style.unorder}>
                <li>
                    <NavLink className={style.list} to="/My_Portfolio/" exact>Home</NavLink>
                    <NavLink className={style.list} to="/About" exact>About</NavLink>
                    <NavLink className={style.list} to="/Project" exact>Project</NavLink>
                    <NavLink className={style.list} to="/Contact" exact>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
