import { toast } from "react-toastify";
import subscribe from "../../assets/images/subscribe.jpg";
const Subscribe = () => {
  const handleSubscription = () => {
    toast.info("Thank you for your subscription!", {
      position: "top-center",
      theme: "colored",
    });
  };
  return (
    <div className="px-5 md:px-10 lg:px-20 rounded">
      <div
        className="hero my-10 rounded-xl"
        style={{
          backgroundImage: `url(${subscribe})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-10">
            <h1 className="text-xl md:text-3xl font-bold dark:text-white">
              SUBSCRIBE NOW
            </h1>
            <h2 className="my-5 text-2xl md:text-4xl font-bold dark:text-white">
              GET OUR UPDATES ALWAYS FAST
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-full outline-0"
            />
            <input
              onClick={handleSubscription}
              value="Subscribe Now"
              className="px-4 py-2 bg-[#2658a3] text-center cursor-pointer hover:bg-transparent hover:border hover: border-[#2658a3] transition-all duration-300 rounded-full uppercase text-white font-medium mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

{
  /* <div
  style={{
    backgroundImage: `url(${subscribe})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
  className="px-5 md:px-10 lg:px-20 py-10"
>

</div>; */
}
