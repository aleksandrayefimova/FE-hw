import React from "react";
import './Logo.module.css';
import img from '../../../img/logo.svg'


export default function Logo() {
    return (
        <div>
            <img src={img} alt="logo" />
        </div>
    );
}
