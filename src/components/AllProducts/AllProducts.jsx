import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./api.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="col-span-4">
      <h2>This is All Products Page: {products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <SingleProduct
            handleSelectedProduct={handleSelectedProduct}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
