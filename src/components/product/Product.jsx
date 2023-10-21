import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData } from "react-router-dom";
import empty from "../../assets/images/empty.png";
import Slider from "../slider/Slider";

const Product = () => {
  const loadedProduct = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>PhoneHub | Product</title>
      </Helmet>
      <div>{loadedProduct !== 0 && <Slider />}</div>
      <div className="px-5 md:px-10 lg:px-20 py-10">
        {loadedProduct.length === 0 ? (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl dark:text-white font-bold text-center">
              No Product Available Now!
            </h2>
            <img src={empty} alt="empty product" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
              {loadedProduct.map((product) => (
                <div
                  key={product._id}
                  className="p-5 bg-white dark:bg-slate-500 shadow-xl rounded-xl flex flex-col lg:flex-row items-center gap-5"
                >
                  <div className="flex-1">
                    <img
                      src={product?.product_img}
                      alt={product?.product_name}
                    />
                  </div>
                  <div className="text-lg space-y-2 dark:text-white  flex-1">
                    <p>
                      <span className="font-bold">Name: </span>
                      {product?.product_name}
                    </p>
                    <p>
                      <span className="font-bold ">Brand: </span>
                      {product?.brand_name}
                    </p>
                    <p>
                      <span className="font-bold ">Type: </span>
                      {product?.type}
                    </p>
                    <p>
                      <span className="font-bold ">Price: </span>
                      {product?.price}
                    </p>
                    <p className="flex gap-1">
                      <span className="font-bold ">Rating: </span>
                      <ReactStars
                        count={product?.rating}
                        value={product?.rating}
                        size={24}
                        fullIcon={<i className="fa fa-star"></i>}
                      />
                    </p>
                    <div className="space-x-3">
                      <Link to={`/productDetails/${product._id}`}>
                        <button className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium">
                          Details
                        </button>
                      </Link>
                      <Link to={`/updateProduct/${product._id}`}>
                        <button className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium">
                          Update
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
};

export default Product;
