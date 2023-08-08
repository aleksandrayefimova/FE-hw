
import React from 'react'
import s from './SectionOptions.module.css';
import OptionItem from '../OptionItem/OptionItem';


export default function SectionOptions() {
  return (
    <div className={s.options}>
        <OptionItem text='Годовое ТО' color='#22356F'/>
        <OptionItem text='Выравнивание колес' color='#0052C1'/>
        <OptionItem text='Настройка переключателей' color='#76B58B'/>
    </div>
  )
}
