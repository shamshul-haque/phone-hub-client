import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto font-barlow dark:bg-gray-400">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
