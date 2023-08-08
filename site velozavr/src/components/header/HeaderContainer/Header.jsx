import React from "react";

import s from "./Header.module.css";
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import Button from "../Button/Button";
// import Button from './components/Button/Button.jsx';.




export default function Header() {
    return (
        <div className={s.header}>
            <Logo/>
            <Nav/>
            <Button/>
        </div>
    );
}
