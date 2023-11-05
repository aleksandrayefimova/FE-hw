import CountItem from "../CountItem/CountItem";
import "./ProductItem.module.css";

import React from "react";
import s from "./ProductItem.module.css";

export default function ProductItem({ id, name, price, count,deleteItem }) {
    return (
        <div className={s.product_item} onDoubleClick={()=>deleteItem(id)}>
            <h2>{name}</h2>
            <p>price: {price}</p>
            <CountItem count={count} />
        </div>
    );
}
