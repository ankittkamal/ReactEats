import { useState } from "react";
import { logo } from "../assests";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { PiContactlessPaymentBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { CgPokemon } from "react-icons/cg";
import { BsCartPlus } from "react-icons/bs";

function Header() {
  const [btnLogin, setBtnLogin] = useState("Sign In");
  return (
    <div className="flex justify-between  items-center shadow-lg   p-5 bg-blue-50 w-full">
      <div>
        <Link to="/">
          <img
            className="w-48 p-2 transform transition-transform hover:scale-125 cursor-pointer "
            src={logo}
            alt="app logo"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center  ">
        <ul className=" flex items-center  gap-12 mx-20  ">
          <Link to="/">
            <li className="  flex items-center justify-between gap-1  rounded-xl p-2 hover:text-blue-500 cursor-pointer transform transition-transform hover:scale-110 font-medium ">
              <GoHome className="text-xl " />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-500 flex items-center justify-between gap-2  rounded-xl p-2   cursor-pointer transform transition-transform hover:scale-110 font-medium  ">
              <CgPokemon className="text-xl" />
              <p>About us</p>
            </li>
          </Link>
          <Link to="/contact">
            <li className="  hover:text-blue-500 flex items-center justify-between gap-2 rounded-xl p-2  cursor-pointer transform transition-transform hover:scale-110 font-medium ">
              <PiContactlessPaymentBold className="text-xl" />
              <p>Contact</p>
            </li>
          </Link>
          <button
            className=" hover:text-blue-500 flex items-center justify-between gap-1  rounded-xl p-2  cursor-pointer transform transition-transform hover:scale-110 font-medium "
            onClick={() => {
              btnLogin === "Sign In"
                ? setBtnLogin("Sign Out")
                : setBtnLogin("Sign In");
            }}
          >
            <BsPerson className="text-2xl" />
            {btnLogin}
          </button>
          <Link to="/cart">
            <li className=" transform transition-transform hover:scale-110  hover:text-blue-500 flex items-center justify-between gap-2  rounded-xl p-2  cursor-pointer font-medium ">
              <BsCartPlus className="text-xl" />
              <p>Cart</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
