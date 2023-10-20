import banner from "../../assets/images/banner.png";
import banner_bg from "../../assets/images/banner_bg.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-5 md:px-10 lg:px-20 py-10"
    >
      <div className="flex justify-between items-center">
        <div className="text-center text-white space-y-10">
          <h1 className="text-5xl text-bold uppercase">
            Latest Collections Are Available!
          </h1>
          <p className="text-2xl">
            Discover the Hottest Tech Trends in Our Latest Collection!
          </p>
          <button className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] transition-all duration-300 rounded uppercase text-white font-medium">
            Order Now
          </button>
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
