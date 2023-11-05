import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

export default function CartsList() {
    const cart = useSelector((store) => store.cartData);

    const filteredCart = cart.filter((el) => el.count > 0);

    if (filteredCart.length === 0) {
        return <div>Корзина пуста</div>;
    }

    return (
        <div className="cart">
            {filteredCart &&
                filteredCart.map((el) => (
                    <CartItem
                        name={el.title}
                        value={el.count}
                        key={el.id}
                        id={el.id}
                    />
                ))}
        </div>
    );
}
