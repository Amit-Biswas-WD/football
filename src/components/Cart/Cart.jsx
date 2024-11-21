const Cart = ({ selectedProducts, handleDelete }) => {
  return (
    <div>
      {selectedProducts.map((product) => (
        <div className="flex gap-3 mb-6 items-center text-lg font-medium">
          <img className="w-28 h-24 " src={product.image} alt="" />
          <h2>{product.name}</h2>
          <p>{product.title}</p>
          <div>
            <button
              onClick={() => handleDelete(product.id)}
              className="btn btn-outline btn-accent"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
