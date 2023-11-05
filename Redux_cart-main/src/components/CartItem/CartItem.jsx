import React from "react";
import { useDispatch } from "react-redux";
import {
    incrementProduct,
    decrementProduct,
} from "../../store/actions/cartAction";

export default function CartItem({ name, value, id }) {
    const dispatch = useDispatch();

    return (
        <div className="cart__item">
            <p>{name}</p>
            {value && (
                <div className="cart__counter">
                    <button onClick={() => dispatch(incrementProduct({ id }))}>
                        +
                    </button>
                    <p>{value}</p>
                    <button onClick={() => dispatch(decrementProduct({ id }))}>
                        -
                    </button>
                </div>
            )}
            {/* <div className="cart__counter">
                <button onClick={()=>dispatch(incrementProduct({id}))}>+</button>
                <p>{value}</p>
                <button onClick={()=>dispatch(decrementProduct({id}))}>-</button>
            </div> */}
        </div>
    );
}
