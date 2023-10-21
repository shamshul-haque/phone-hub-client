import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import not_found from "../assets/images/not_fount.gif";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>PhoneHub | Error</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-10">
        <img src={not_found} alt="not found" className="w-40 md:w-80" />
        <button
          className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
