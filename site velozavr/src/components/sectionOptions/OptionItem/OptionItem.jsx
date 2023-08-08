import React from "react";
import s from "./OptionItem.module.css";

export default function OptionItem(props) {
    let { text, color } = props;
    const itemStyle = {
        backgroundColor: color,
    };
    return (
        <div style={itemStyle} className={s.item}>
            <p>{text}</p>
        </div>
    );
}
