import { useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts/AllProducts";
import CardContainer from "./components/CardContainer/CardContainer";
import Navbar from "./components/Header/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price, setPrice] = useState(10000);

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr);
  };

  const handleDeletePride = (id) => {
    const product = selectedProducts.find((p) => p.id == id);
    setPrice(price - product.price);
  };

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((p) => p.id == product.id);
    if (isExist) {
      alert("Already Exist...");
    } else {
      handleIncreasePrice(product.price);
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };

  const handleDelete = (id) => {
    handleDeletePride(id);
    const removeProduct = selectedProducts.filter(
      (product) => product.id != id
    );
    setSelectedProducts(removeProduct);
  };

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "active",
      });
    } else {
      setIsActive({
        cart: false,
        status: "active",
      });
    }
  };

  return (
    <>
      <Navbar selectedProducts={selectedProducts.length} price={price} />
      <div className="container mx-auto my-10 grid grid-cols-6 gap-6">
        <AllProducts handleSelectedProduct={handleSelectedProduct} />
        <CardContainer
          handleDelete={handleDelete}
          selectedProducts={selectedProducts}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        />
      </div>
    </>
  );
}

export default App;
