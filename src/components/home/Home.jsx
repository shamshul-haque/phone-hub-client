import { Helmet } from "react-helmet";
import Brand from "../brand/Brand";
import Banner from "../header/Banner";
import Subscribe from "../subscribe/Subscribe";
import Support from "../support/Support";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PhoneHub | Home</title>
      </Helmet>
      <Banner />
      <Brand />
      <Subscribe />
      <Support />
    </div>
  );
};

export default Home;
