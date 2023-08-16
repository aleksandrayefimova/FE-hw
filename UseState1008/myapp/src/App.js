import { useState } from "react";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
// import AddProductModal from "./components/AddProductModal/AddProductModal";
import Modal from "./components/Modal/Modal";

function App() {
    const data = [
        { id: 1, name: "Велосипед", price: 1000, count: 1 },
        { id: 2, name: "Самокат", price: 700, count: 1 },
        { id: 3, name: "Ролики", price: 1300, count: 2 },
        { id: 4, name: "Сноуборд", price: 19000, count: 4 },
    ];

    let [newData, setNewData] = useState(data);
    let [isActive, setIsActive] = useState(false);
    console.log(isActive);

    let addProduct = (nameItem, price) => {
        let nameProduct = isActive ? nameItem : prompt("add name");
        let priceProduct = isActive ? price : prompt("add price");
        // if(!isActive){
        //   nameProduct=nameItem;
        //   priceProduct=price;
        // }
        // else{
        //   nameProduct= prompt('add name')
        //   priceProduct= prompt('add price')
        // }
        let product = {
            id: Date.now(),
            name: nameProduct,
            price: priceProduct,
            count: 1,
        };
        setNewData((oldData) => [...oldData, product]);
    };

    let addProdModal = () => {
        setIsActive(!isActive);
    };

    let deleteItem = (id) => {
        console.log(id);
        let filtredData = newData.filter((el) => el.id !== id  )
        setNewData(filtredData);
    };

    return (
        <div className="App">
            {isActive ? (
                <Modal addProduct={addProduct} addProdModal={addProdModal} />
            ) : null}
            <AddProduct addProduct={addProduct} />
            <Products data={newData} deleteItem={deleteItem}/>
        </div>
    );
}

export default App;
