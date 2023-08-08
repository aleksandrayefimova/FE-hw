import React from 'react'
import Description from '../DescriptionText/Description'
import s from'./DescriptionSection.module.css';
import image from '../../img/section_1.svg'
import ImageItem from '../ImageItem/ImageItem';

export default function DescriptionSection() {
  return (
    <div className={s.description_container}>
        <Description/>
        <ImageItem url={image} alt='dino' />
    </div>
  )
}
