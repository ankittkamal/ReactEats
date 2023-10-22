import { useState } from "react";
import { logo } from "../assests";

function Header() {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="flex justify-between  border border-b-gray-950 bg-gray-800 items-center shadow-lg   p-6">
      <div>
        <img className="w-48 p-2" src={logo} alt="app logo" />
      </div>
      <div className="flex gap-4 items-center text-lg text-gray-300 font-medium ">
        <ul className=" flex items-center gap-6  ">
          <li className=" hover:text-slate-50  ">Home</li>
          <li className="hover:text-slate-50   ">About us</li>
          <li className="  hover:text-slate-50 ">Contact Us</li>
          <li className="  hover:text-slate-50  ">Cart</li>
        </ul>
        <button
          className=" hover:text-slate-50 "
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
