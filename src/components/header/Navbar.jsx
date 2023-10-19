import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
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
          to="/addBrand"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Add Brand
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive ? "text-[#2658a3] underline active" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
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
              <Link
                to="/login"
                onClick={handleLogout}
                className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
              >
                Log Out
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </ul>
      </div>
      <div className="lg:hidden flex">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`absolute right-6 md:right-11 bg-[#8d8e8f] bg-opacity-60 rounded-lg p-5 ${
            toggleMenu ? `top-14` : `-top-60`
          } duration-1000`}
        >
          {links}
          <div className="mt-3">
            {user ? (
              <Link
                to="/login"
                onClick={handleLogout}
                className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
              >
                Log Out
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
