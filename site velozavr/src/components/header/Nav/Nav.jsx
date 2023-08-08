
import React from 'react'
import s from './Nav.module.css';


export default function Nav() {
  return (
    <ul className={s.nav_menu}>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Аренда</a></li>
    </ul>
  )
}
