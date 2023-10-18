import { Helmet } from "react-helmet";
import Brand from "../brand/Brand";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PhoneHub | Home</title>
      </Helmet>
      <Brand />
    </div>
  );
};

export default Home;
