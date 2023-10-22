import { useState } from "react";
import { logo } from "../assests";

function Header() {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="flex justify-between  items-center shadow-lg   p-6 bg-blue-50 w-full">
      <div>
        <img className="w-48 p-2" src={logo} alt="app logo" />
      </div>
      <div className="flex gap-4 items-center">
        <ul className=" flex items-center gap-6  ">
          <li className=" hover:bg-gray-600  rounded-xl p-2 hover:text-white ">
            Home
          </li>
          <li className="hover:bg-gray-600  rounded-xl p-2 hover:text-white   ">
            About us
          </li>
          <li className="  hover:bg-gray-600  rounded-xl p-2 hover:text-white ">
            Contact Us
          </li>
          <li className="  hover:bg-gray-600  rounded-xl p-2 hover:text-white  ">
            Cart
          </li>
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
