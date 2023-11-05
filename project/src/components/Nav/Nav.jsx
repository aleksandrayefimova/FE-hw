import React, { useState } from "react";
import s from "./Nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import cartIcon from '../../assets/cartIcon.svg'
import { Turn as Hamburger, Turn } from 'hamburger-react'


export default function Nav() {
    const setActiveLink = ({ isActive }) => (isActive ? "item_active" : "item");
    const [isOpen, setOpen] = useState(false)
    

    const toggleAction = () => {
        if (window.innerWidth <= 768) {
            setOpen(!isOpen);
            console.log(isOpen);
        }
    };

    const navClassName = isOpen ? `${s.nav__menu} ${s.nav__activeToggleNav}` : s.nav__menu;
    const toggleClassName = isOpen ? `${s.burger} ${s.burger__activeBurger}` : s.burger;
    console.log(navClassName);
    // const setActiveLink = ({ isActive }) => {
    //     return !isActive ? s.nav__menu : `${s.nav__menu_active} ${s.nav__menu}`;
    // };

    // товары в корзине:
    const cartStorage = JSON.parse(localStorage.getItem("cartData")).total_count;
    console.log(cartStorage);

    
    return (
        <>
            <nav className={s.nav}>
                <ul className={navClassName}>
                    <li className={s.nav__li}>
                        <NavLink to="/" className={setActiveLink} onClick={toggleAction}>
                            Main Page
                        </NavLink>
                    </li>
                    <li className={s.nav__li}>
                        <NavLink to="/products" className={setActiveLink} onClick={toggleAction}>
                            All products
                        </NavLink>
                    </li>
                    <li className={s.nav__li}>
                        <NavLink to="/sales" className={setActiveLink} onClick={toggleAction}>
                            All sales
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Link to={'/cart'}>
                <div className={s.cart}>
                    <img src={cartIcon} alt="cart" />
                </div>
            </Link>
            <div className={toggleClassName}><Turn toggled={isOpen} toggle={setOpen}/></div>
        </>
    );
}
