import { Helmet } from "react-helmet";
import Brand from "../brand/Brand";
import Banner from "../header/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PhoneHub | Home</title>
      </Helmet>
      <Banner />
      <Brand />
    </div>
  );
};

export default Home;
