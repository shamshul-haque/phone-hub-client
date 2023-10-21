import { Helmet } from "react-helmet";
import BestSell from "../bestSell/BestSell";
import Brand from "../brand/Brand";
import Banner from "../header/Banner";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PhoneHub | Home</title>
      </Helmet>
      <Banner />
      <Brand />
      <Subscribe />
      <BestSell />
    </div>
  );
};

export default Home;
