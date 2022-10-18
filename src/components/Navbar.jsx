import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {

    const [toggle, setToggle] = useState(false);


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoonkbank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-3">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] text-white `}
          >
            <a href={`#${nav.id}`}>
                {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
        src={toggle ? close : menu} alt="hamburguer-menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev)=> !prev)}
        />



      </div>
    </nav>
  );
}

export default Navbar;
