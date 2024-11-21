import About from "../About/About";
import Cart from "../Cart/Cart";

const CardContainer = ({
  handleIsActiveState,
  isActive,
  selectedProducts,
  handleDelete,
}) => {
  //   console.log(isActive);
  return (
    <div className="col-span-2">
      <h1 className="text-2xl font-bold">This is Card Container</h1>
      <div className="flex justify-between my-10">
        <div
          onClick={() => handleIsActiveState("cart")}
          className={`${isActive.cart ? "btn btn-error" : "btn"}`}
        >
          CART
        </div>
        <div
          onClick={() => handleIsActiveState("about")}
          className={`${isActive.cart ? "btn" : "btn btn-error"}`}
        >
          ABOUT
        </div>
      </div>
      {isActive.cart ? (
        <Cart selectedProducts={selectedProducts} handleDelete={handleDelete} />
      ) : (
        <About />
      )}
    </div>
  );
};

export default CardContainer;
