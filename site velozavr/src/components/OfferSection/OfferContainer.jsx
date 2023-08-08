import React from "react";
import s from "./OfferContainer.module.css";
import image from "../../img/moto.svg";
import ImageItem from "../ImageItem/ImageItem";
import TextItem from "../TextItem/TextItem";

export default function OfferContainer() {
    const content = {
        title: "Что мы предлагаем",
        text: "В нашей мастерской можно выполнить комплексное техническое   обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.",
    };
    return (
        <div className={s.container}>
            <TextItem title={content.title} text={content.text} style='offer_text'/>
            <ImageItem url={image} alt="moto" />

        </div>
    );
}
