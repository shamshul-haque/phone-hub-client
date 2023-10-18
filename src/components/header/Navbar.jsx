import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </Link>
        <p className="text-3xl font-bold pl-2">
          <span className="text-[#2658a3]">Tech</span>
          <span className="text-[#8d8e8f]">Hub</span>
        </p>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-5">
          {links}
          <div>
            <Link
              to="/login"
              className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
            >
              Login
            </Link>
          </div>
        </ul>
      </div>
      <div className="lg:hidden flex">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`absolute right-6 md:right-11 bg-[#8d8e8f] bg-opacity-60 rounded-lg p-5 ${
            toggleMenu ? `top-14` : `-top-40`
          } duration-1000`}
        >
          {links}
          <div className="mt-3">
            <Link
              to="/login"
              className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded w-full uppercase text-white font-medium"
            >
              Login
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;