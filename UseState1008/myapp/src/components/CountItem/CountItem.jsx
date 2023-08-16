import s from "./CountItem.module.css";

import React, { useState } from "react";

export default function CountItem({ count }) {
    let [countValue, setCountValue] = useState(count);

    let increment = () => {
        setCountValue(countValue + 1);
    };
    let decrement = () => {
        setCountValue(countValue - 1);
    };

    return (
        <div className={s.count_container}  onDoubleClick={(event)=>event.stopPropagation()}>
            <button onClick={decrement}>-</button>
            <p>{countValue}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}
