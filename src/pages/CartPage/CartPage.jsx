import React, { useEffect, useState } from "react";
import s from "./CartPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/CartList/CartList";
import { loadCartFromLocalStorage } from "../../store/reducers/CartReducer";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
// import CartList from '../../components/CartList/CartList';

export default function CartPage() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const cartStorage = JSON.parse(localStorage.getItem("cartData"));
    useEffect(() => {
        if (!cartState.cart.length) {
            dispatch(loadCartFromLocalStorage());
        }
    }, []);
    // console.log(cartStorage, "cartState");
    return (
        <div className={s.page}>
            <h2 className="block__title block__title-margin">Shopping cart</h2>
            <div className={s.cart}>
                <div className={s.cart__order_details}>
                    <h2 className={s.cart__title}>Order details </h2>
                    <div className={s.cart__sum}>
                        <p className={s.cart__sum_title}>Total</p>
                        <p className={s.cart__sum_value}>
                            {cartStorage.total_sum} <span>$</span>
                        </p>
                    </div>
                    <div className={s.cart__form}>
                        <input
                            type="number"
                            placeholder="Phone number"
                            className={s.cart__form_input}
                        />
                        <Button name="Order" className={"button_order"} />
                    </div>
                </div>
                <div>
                    <Link to="/categories" className={s.page__back}>
                        <p>Back to the store</p>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z"
                                fill="black"
                            />
                        </svg>
                    </Link>
                    <CartList products={cartStorage.cart} />
                </div>
            </div>
        </div>
    );
}
