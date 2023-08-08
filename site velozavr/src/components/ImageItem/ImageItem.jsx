import React from 'react'
import s from  './ImageItem.module.css';

export default function ImageItem({url, alt}) {
  return (
    <div className={s.image_container}>
        <img src={url} alt={alt}  />
    </div>
  )
}
