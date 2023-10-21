import { Helmet } from "react-helmet";
import BestCell from "../bestCell/BestCell";
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
      <BestCell />
    </div>
  );
};

export default Home;
