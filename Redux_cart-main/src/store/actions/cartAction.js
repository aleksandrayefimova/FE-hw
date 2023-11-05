export const cartActionsTypes = {
    ADD_TO_CART: "cart/add_to_cart",
    INCR_PRODUCT: "cart/increment_product",
    DECR_PRODUCT: "cart/decrement_product",
};

export const addToCart = (name, id) => {
    return {
        type: cartActionsTypes.ADD_TO_CART,
        value: { name, id },
    };
};

export const incrementProduct = (id) => {
    return {
        type: cartActionsTypes.INCR_PRODUCT,
        value: id,
    };
};
export const decrementProduct = (id) => {
    return {
        type: cartActionsTypes.DECR_PRODUCT,
        value: id,
    };
};
