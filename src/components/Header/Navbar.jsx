const Navbar = ({ selectedProducts, price }) => {
  const items = [
    <li>Home</li>,
    <li>Product</li>,
    <li>Card {selectedProducts}</li>,
    <li>$ {price}</li>,
  ];
  return (
    <div className="navbar  bg-green-400 text-lg font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <a className="text-xl">Football</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-3 gap-6 text-lg font-semibold">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
