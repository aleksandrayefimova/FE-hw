import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/CartReduser";

const rootReducer = combineReducers({
    cartData: cartReducer,
});
const store = createStore(rootReducer);
export default store;
