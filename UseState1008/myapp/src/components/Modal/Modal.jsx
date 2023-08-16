import s from "./Modal.module.css";

import React, { useState } from "react";

export default function Modal({ addProduct ,addProdModal}) {
    const [ nameProd, setNameProd] = useState('')
    const [ priceProd, setPriceProd] = useState('')

    const addName=(event)=>{
        setNameProd(event.target.value)
    }
    const addPrice=(event)=>{
        setPriceProd(event.target.value)
    }
    const addProd=()=>{
        addProduct(nameProd,priceProd)
        setNameProd('')
        setPriceProd('')
        addProdModal()
    }
    

    return (
        <div className={s.modal_container} onClick={addProdModal}>
            <div className={s.modal} onClick={(event)=>event.stopPropagation()}>
                <input type="text" placeholder="name product" name="name"  onChange={addName} value={nameProd}/>
                <input type="text" placeholder="price" name="price" onChange={addPrice} value={priceProd}/>
                <div className={s.buttons}>
                    <button className={s.btn_ok} onClick={addProd} >ok</button>
                    <button className={s.btn_cancel} onClick={addProdModal}>cancel</button>
                </div>
            </div>
        </div>
    );
}
