
import React from 'react'
import s from './Products.module.css';
import ProductItem from '../ProductItem/ProductItem';


export default function Products({data,deleteItem}) {
  return (
    <div className={s.products_container}>
        {data.map(el=> <ProductItem 
        key={`${el.id}+${el.name}`} 
        id={el.id}
        name={el.name}  
        price={el.price} 
        count={el.count}
        deleteItem={deleteItem}
        />)}
    </div>
  )
}
