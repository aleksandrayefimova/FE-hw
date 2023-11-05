import s from './Offer.module.scss';
import React from 'react'
import gnomImg from '../../assets/offerGnom.svg'

export default function Offer() {
  return (
    <div className={s.offer}>
        <img src={gnomImg} alt="gnom" />
        <div >
            <h2>5% off </h2>
            <h3>on the first order</h3>
            <form >
                <input type="text" placeholder='+49' className={s.input}/>
                <input type="submit" value='Get a discount' className={s.submit}/>
            </form>
        </div>
    </div>
  )
}
