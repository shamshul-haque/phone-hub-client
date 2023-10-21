import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const Root = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="max-w-screen-xl mx-auto font-barlow dark:bg-gray-400">
      <Navbar theme={theme} handleSwitchTheme={handleSwitchTheme} />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
