import { Link } from "react-router-dom";
import { EmptyCart } from "../../assests";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList";
import { BsCart } from "react-icons/bs";
import { clearCart } from "./cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col items-center">
        <img className="w-96 h-72 " src={EmptyCart} alt="cart" />
        <h3 className="font-semibold text-gray-700 mt-4 text-xl">
          Your cart is empty
        </h3>
        <p className="mt-2 font-thin text-sm">
          You can go to home page to view more restaurants
        </p>
        <Link to="/">
          <button className="bg-orange-500 text-white mt-6 p-3">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    );

  return (
    <div className="w-full flex justify-between ">
      {/** clear cart button  */}
      <div
        className="ring-2 ring-gray-500  hover:ring-red-500 w-32 p-2 mt-8 hover:text-red-500 cursor-pointer rounded-xl mx-8 h-10"
        onClick={() => handleClearCart()}
      >
        <button className="flex items-center gap-2 transform transition-transform hover:scale-105 -mx-0.5">
          <div className="text-lg font-semibold  flex items-center">
            Clear
            <li className="   hover:text-red-500 flex items-center justify-between gap-3 p-0 cursor-pointer ">
              <span className="-mt-2 hover:text-red-500">
                <BsCart className="text-3xl absolute font-semibold  hover:text-red-500 " />
                <p className="text-xs ml-3 font-bold mt-1.5  ">
                  {" "}
                  {cartItems.length}
                </p>
              </span>
              <p className=" font-semibold ">Cart</p>
            </li>
          </div>
        </button>
      </div>
      {/** order list  */}
      <div className="mb-24 mt-12 w-96 mx-28">
        <div className=" ">
          <ItemList items={cartItems} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
