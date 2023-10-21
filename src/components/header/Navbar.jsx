import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = ({ theme, handleSwitchTheme }) => {
  const { user, logoutUser } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Log Out successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  const links = (
    <>
      <li className="dark:text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/addBrand"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Add Brand
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/myCart"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5 bg-White shadow-xl">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </Link>
        <i className="text-3xl font-bold">
          <span className="text-[#2658a3]">Phone</span>
          <span className="text-[#8d8e8f]">Hub</span>
        </i>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-5">
          {links}
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="profile" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="z-20 menu dropdown-content bg-[#8d8e8f] bg-opacity-60 p-3 rounded-box text-center w-40"
                >
                  <li className="font-bold pb-3 uppercase dark:text-white">
                    {user.displayName}
                  </li>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
                  >
                    Log Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
              >
                Login
              </Link>
            )}
          </div>
          <button
            onClick={handleSwitchTheme}
            className=" text-slate-500 dark:text-white right-2 top-2 bg-[#2658a3] text-lg p-2 rounded-md"
          >
            {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </ul>
      </div>
      <div className="lg:hidden flex">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu === true ? (
            <AiOutlineClose className="dark:text-white" />
          ) : (
            <AiOutlineMenu className="dark:text-white" />
          )}
        </div>
        <ul
          className={`absolute right-6 md:right-11 bg-[#8d8e8f] rounded-lg p-5 ${
            toggleMenu ? `top-14` : `-top-80`
          } duration-1000`}
        >
          <div>
            {user && (
              <div>
                <li className="flex justify-center">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                </li>
                <li className="font-bold text-center mt-3">
                  {user.displayName}
                </li>
              </div>
            )}
          </div>
          {links}
          <div className="mt-5">
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
                >
                  Log Out
                </Link>
                <button
                  onClick={handleSwitchTheme}
                  className=" text-slate-500 dark:text-white right-2 top-2 bg-[#2658a3] text-lg p-2 rounded-md"
                >
                  {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
                >
                  Login
                </Link>
                <button
                  onClick={handleSwitchTheme}
                  className=" text-slate-500 dark:text-white right-2 top-2 bg-[#2658a3] text-lg p-2 rounded-md"
                >
                  {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string,
  handleSwitchTheme: PropTypes.func,
};

export default Navbar;
