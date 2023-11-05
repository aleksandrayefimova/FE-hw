import "./App.scss";
import AddProduct from "./components/AddProduct/AddProduct";
import CartsList from "./components/CartsList/CartsList";

function App() {
    return (
        <div className="App">
            <CartsList />
            <AddProduct/>
        </div>
    );
}

export default App;
