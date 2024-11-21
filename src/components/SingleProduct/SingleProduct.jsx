const SingleProduct = ({ product, handleSelectedProduct }) => {
  const { image, title, description, jercynumber, name, price } = product;
  //   console.log(handleSelectedProduct);
  return (
    <div className="border border-gray-300 rounded-lg shadow-gray-300">
      <img
        className="w-[420px] h-[330px] object-cover rounded-t-lg"
        src={image}
        alt="Not Found Image"
      />
      <div className="p-2">
        <p className="text-xl font-bold">Name: {name}</p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="p-2">
        <p>Jercy Number: {jercynumber}</p>
        <div className="flex justify-between">
          <p>Price: {price} $</p>
          <button
            onClick={() => handleSelectedProduct(product)}
            className="btn btn-outline btn-accent"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
