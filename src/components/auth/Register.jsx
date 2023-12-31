import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { userRegister, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    e.currentTarget.reset();

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\-]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must include one uppercase & special character and length should be at least six!",
        {
          position: "top-center",
          theme: "colored",
        }
      );
      return;
    }

    userRegister(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        logoutUser().then(() => {
          navigate("/login");
        });
        toast.success("Your profile created successfully. Please login now!", {
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

  return (
    <div className="px-5 md:px-10 lg:px-20 ">
      <Helmet>
        <title>PhoneHub | Register</title>
      </Helmet>
      <div className="flex flex-col items-center my-10">
        <div className="w-full max-w-sm bg-[#F4F3F0] dark:bg-slate-500 dark:text-white rounded p-5">
          <h1 className="text-3xl text-center font-bold">Create Account</h1>
          <form onSubmit={handleRegister} className="mt-5 space-y-5">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
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
            <div className="form-control">
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="check" required />
              <Link to="#" className="text-sm">
                Accept{" "}
                <span className="text-[#2658a3] hover:underline">
                  Terms and Conditions
                </span>
              </Link>
            </div>
            <input
              type="submit"
              value="Register"
              className="text-xl p-2 rounded  w-full text-center text-white hover:text-black dark:hover:text-white bg-[#2658a3] hover:bg-transparent cursor-pointer hover:border hover:border-[#8d8e8f] dark:hover:border-white  font-medium uppercase transition-all duration-500"
            />
          </form>
          <p className="text-sm  text-center pt-5">
            <span>Have An Account?</span>{" "}
            <Link
              to="/login"
              className="text-[#2658a3] hover:underline font-medium "
            >
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
