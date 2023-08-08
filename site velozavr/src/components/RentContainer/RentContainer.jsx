import React from "react";
import s from './RentContainer.module.css';
import image from '../../img/velo.svg'
import TextItem from "../TextItem/TextItem";
import ImageItem from "../ImageItem/ImageItem";

export default function RentContainer() {
    const content = {
        title: "Прокат велосипедов",
        text: "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!",
    };

    return (
        <div className={s.rent_container}>
            <ImageItem url={image} alt='velo'/>
            <TextItem title={content.title} text={content.text} style='rent_text' />
        </div>
    );
}
