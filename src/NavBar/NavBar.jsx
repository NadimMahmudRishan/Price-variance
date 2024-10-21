import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import Nav from "./Nav";

const NavBar = () => {
  const navComponents = ["Home", "Menu", "Offer", "Contract"];

  const [menu, setmenu] = useState(false);
  const handelMenu = () => {
    setmenu(!menu);
  };
  return (
    <div className="flex justify-between bg-slate-400 p-4">
      <div>
        {menu ? (
          <FiAlignJustify
            onClick={handelMenu}
            className=" text-2xl md:hidden"
          />
        ) : (
          <FiX onClick={handelMenu} className=" text-2xl md:hidden" />
        )}

        <ul
          className={`md:flex-row p-1 md:flex  ${
            menu ? "-top-60": "top-14 " 
          } flex-col md:justify-around bg-slate-400 md:static absolute rounded-2xl md:gap-5 gap-3 duration-1000 `}
        >
          {navComponents.map((nav, xid) => (
            <Nav key={xid} nav={nav}></Nav>
          ))}
        </ul>
      </div>
      <div className=" md:w-10">
        <img
          className="w-10 rounded-full"
          src="https://i.ibb.co.com/58fpDJF/IMG-20230814-133832.jpg"
          alt="profile.png"
        />
      </div>
    </div>
  );
};

export default NavBar;
