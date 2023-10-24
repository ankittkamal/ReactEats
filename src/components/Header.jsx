import { useState } from "react";
import { logo } from "../assests";
import { Link } from "react-router-dom";

function Header() {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="flex justify-between  items-center shadow-lg   p-6 bg-blue-50 w-full">
      <div>
        <Link to="/">
          <img
            className="w-48 p-2 transform transition-transform hover:scale-125 cursor-pointer "
            src={logo}
            alt="app logo"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <ul className=" flex items-center gap-6 cursor-pointer  ">
          <Link to="/">
            <li className=" hover:bg-gray-600  rounded-xl p-2 hover:text-white ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:bg-gray-600  rounded-xl p-2 hover:text-white   ">
              About us
            </li>
          </Link>
          <Link to="/contact">
            <li className="  hover:bg-gray-600  rounded-xl p-2 hover:text-white ">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li className="  hover:bg-gray-600  rounded-xl p-2 hover:text-white  ">
              Cart
            </li>
          </Link>
        </ul>
        <button
          className=" hover:bg-gray-600  rounded-xl p-2 hover:text-white "
          onClick={() => {
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}
        >
          {btnLogin}
        </button>
      </div>
    </div>
  );
}

export default Header;
