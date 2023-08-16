import s from "./AddProduct.module.css";

import React, { useState } from "react";

export default function AddProduct({ addProduct }) {

    return (
        <div className={s.container}>
            <button onClick={addProduct}>Add Product (prompt)</button>
        </div>
    );
}
