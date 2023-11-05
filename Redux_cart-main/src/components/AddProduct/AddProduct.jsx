import { addToCart } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";

export default function AddProduct() {
    const dispatch = useDispatch();

    return (
        <>
            <button
                className="button-add"
                onClick={() => dispatch(addToCart(prompt()))}
            >
                Add product
            </button>
        </>
    );
}
