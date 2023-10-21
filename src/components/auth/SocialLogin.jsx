import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        if (result.user) {
          navigate(from, {
            replace: true,
          });
        }
        toast.success("Login successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.success(error.code, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1 border border-[#8d8e8f] dark:border-white" />
        <span className="text-center dark:text-white">OR</span>
        <hr className="flex-1 border border-[#8d8e8f] dark:border-white" />
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full dark:text-white border border-[#8d8e8f] hover:border-[#2658a3] dark:border-white transition-all duration-500 p-2 rounded font-medium flex items-center justify-center gap-1"
      >
        <FcGoogle className="text-2xl" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
