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

  const handleSelectedProduct = (product) => {
    const isExist = selectedProducts.find((pd) => pd.id == product.id);

    if (isExist) {
      alert("This is Already exist...");
    } else {
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }
  };
  console.log(selectedProducts);

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
      <Navbar />
      <div className="container mx-auto my-10 grid grid-cols-6 gap-6">
        <AllProducts handleSelectedProduct={handleSelectedProduct} />
        <CardContainer
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        />
      </div>
    </>
  );
}

export default App;
