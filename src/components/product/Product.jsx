import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import empty from "../../assets/images/empty.png";

const Product = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  return (
    <div className="px-5 md:px-10 lg:px-20 py-10">
      <Helmet>
        <title>PhoneHub | Product</title>
      </Helmet>
      <div>
        {loadedProduct.length === 0 ? (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              No Product Available Now!
            </h2>
            <img src={empty} alt="empty product" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {loadedProduct.map((product) => (
              <div
                key={product._id}
                className="p-5 bg-white shadow-xl rounded-xl flex justify-between"
              >
                <img
                  src={product?.product_img}
                  alt={product?.product_name}
                  className="w-32 object-cover"
                />
                <div className="text-lg space-y-2">
                  <p>
                    <span className="font-bold ">Name: </span>
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
                  <p>
                    <span className="font-bold ">Rating: </span>
                    {product.rating}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <button className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium">
                    Details
                  </button>
                  <Link to={`/updateProduct/${product._id}`}>
                    <button className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
