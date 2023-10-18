import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1 border border-[#8d8e8f]" />
        <span className="text-center">OR</span>
        <hr className="flex-1 border border-[#8d8e8f]" />
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-full border border-[#8d8e8f] hover:border-[#2658a3]  transition-all duration-500 p-2 rounded font-medium flex items-center justify-center gap-1"
      >
        <FcGoogle className="text-2xl" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
