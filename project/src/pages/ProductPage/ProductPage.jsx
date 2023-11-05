import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./ProductPage.module.scss";
import {  fetchProducts } from "../../store/asyncActions/products";
import ProductIem from "../../components/ProductIem/ProductIem";

export default function ProductPage() {
    const { id } = useParams();
    const products = useSelector((state) => state.products.productList);
    const product = products?.filter((el) => el.id == id)[0] ;
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(fetchProducts())
        window.scrollTo(0, 0);
    },[dispatch])

    console.log(product);

    return (
        <div className={s.products__container}>
            
            <ProductIem type="SingleProductItem" id={id} product={product}/>
        </div>
    );
}
