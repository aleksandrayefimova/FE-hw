import React from "react";
import s from "./Description.module.css";

export default function Description() {
    return (
        <div className={s.text_container}>
            <h1>Веломастерская “Велозавр”</h1>
            <p>
                Мы, мастера веломастерской «Велозавр», как раз те самые
                счастливые люди, которые смогли превратить свое увлечение и
                хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш
                двухколесный друг приносил Вам только радость и удовольствие от
                езды.
            </p>
        </div>
    );
}
