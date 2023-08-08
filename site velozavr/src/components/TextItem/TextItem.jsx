import React from 'react'
import s from'./TextItem.module.css';

export default function TextItem({title,text,style}) {
  
  let styleName = style ? s[style] + " " + s.italic : s.italic;
  console.log( 'style'+style);
  console.log('styleName'+styleName);
  return (

    <div className={styleName}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}
