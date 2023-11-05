import { cartActionsTypes } from "../actions/cartAction";

const defaultState = [
    { id: 1, title: "Велосипед", count: 5 },
    { id: 2, title: "Самокат", count: 4 },
    { id: 3, title: "Гантели", count: 7 },
    { id: 4, title: "Ракетки", count: 1 },
];

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case cartActionsTypes.ADD_TO_CART:
            const newState = [...state];
            return [
                ...state,
                {
                    id: Date.now().toLocaleString(),
                    title: action.value.name,
                    count: 1,
                },
            ];

        case cartActionsTypes.INCR_PRODUCT:
            return state.map((elem) => {
                if (elem.id === action.value.id) {
                    if (elem.count >= 25) {
                        return elem;
                    }
                    return { ...elem, count: (elem.count += 1) };
                }
                return elem;
            });

        case cartActionsTypes.DECR_PRODUCT:
            return state.map((elem) => {
                if (elem.id === action.value.id) {
                    if (elem.count <= 1) {
                        let newState = [...state];
                        return newState.filter(
                            (elem) => elem.id !== action.value.id
                        );
                    }
                    return { ...elem, count: (elem.count -= 1) };
                }
                return elem;
            });

        default:
            return state;
    }
};
