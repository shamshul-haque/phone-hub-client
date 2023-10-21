import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsStopwatchFill,
  BsTwitter,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-black dark:bg-slate-500 text-white">
      <div className="px-5 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-1">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="w-12 h-12" />
            </Link>
            <i className="text-3xl font-bold">
              <span className="text-[#2658a3]">Phone</span>
              <span className="text-[#8d8e8f]">Hub</span>
            </i>
          </div>
          <p className="mt-1 ">
            Your One-Stop Destination for Cutting-Edge Phones. Discover the
            future of mobile technology with our curated selection!
          </p>
          <div className="flex items-center gap-2 text-white text-2xl mt-3">
            <Link to="#">
              <BsFacebook />
            </Link>
            <Link to="#">
              <BsTwitter />
            </Link>
            <Link to="#">
              <BsInstagram />
            </Link>
            <Link to="#">
              <BsLinkedin />
            </Link>
          </div>
          <h2 className="text-3xl text-white  mt-5">Get in Touch</h2>
          <div className="mt-2 space-y-1 ">
            <p className="flex items-center gap-2 text-white">
              <BsFillTelephoneFill />
              <a href="tel:+880 1406680846">+880 1406680846</a>
            </p>
            <p className="flex items-center gap-2 text-white">
              <GrMail />
              <a href="mailto:shamshul.haque.dev@gmail.com">
                shamshul.haque.dev@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-white">
              <MdLocationOn />
              <a
                href="https://www.google.com/maps/d/viewer?mid=1eI6iqbO3TQfnWZekhs_P18a541c&hl=en_US&ll=23.751038999999988%2C90.39056000000001&z=17"
                target="_blank"
                rel="noreferrer"
              >
                Bashundhara City Shopping Complex, Dhaka-1215
              </a>
            </p>
            <p className="flex items-center gap-2 text-white">
              <BsStopwatchFill />
              <span>Mon - Fri / 9:00 AM - 9:00 PM</span>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl text-white ">Connect with Us</h2>
          <form className="space-y-4 mt-5 ">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <textarea
              name="message"
              cols="10"
              rows="2"
              placeholder="Message"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <input
              type="submit"
              value="Send Message"
              className="text-xl text-white bg-[#2658a3] hover:bg-transparent hover:border hover:border-[#2658a3] px-3 py-2 rounded-full cursor-pointer"
            />
          </form>
        </div>
      </div>
      <hr className="border-[#2658a3]" />
      <div>
        <p className="text-sm text-center  py-5">
          Copyright Phone Hub ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
