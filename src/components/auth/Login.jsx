import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();

    userLogin(email, password)
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
      .catch(() => {
        toast.error("Please provide correct email and password!", {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  return (
    <div className="px-5 md:px-10 lg:px-20">
      <Helmet>
        <title>PhoneHub | Login</title>
      </Helmet>
      <div className="flex flex-col items-center my-10">
        <div className="w-full max-w-sm bg-[#F4F3F0] rounded p-5">
          <h1 className="text-3xl text-[#374151] text-center font-bold">
            Login Now
          </h1>
          <form onSubmit={handleLogin} className="mt-5 space-y-5 ">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="flex gap-1">
                <input type="checkbox" name="terms" />
                <span className="text-sm">Remember Me</span>
              </p>
              <Link to="#" className="text-sm text-[#2658a3] hover:underline">
                Forgot Password
              </Link>
            </div>
            <input
              type="submit"
              value="Login"
              className="text-xl p-2 rounded border w-full text-center text-white hover:text-black bg-[#2658a3] hover:bg-transparent cursor-pointer hover:border-[#8d8e8f] font-medium uppercase transition-all duration-500"
            />
          </form>
          <p className="text-sm  text-center pt-5">
            <span>{`Don't Have Any Account?`}</span>{" "}
            <Link
              to="/register"
              className="text-[#2658a3] hover:underline font-medium"
            >
              Register
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
