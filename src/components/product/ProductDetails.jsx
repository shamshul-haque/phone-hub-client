import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const {
    _id,
    product_img,
    product_name,
    brand_name,
    type,
    description,
    price,
    rating,
  } = loadedProduct;

  return (
    <div className="px-5 md:px-10 lg:px-20 py-10">
      <Helmet>
        <title>PhoneHub | Product Details</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold pb-10">
        Details of {product_name}
      </h1>
      <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="flex-1">
          <img src={product_img} alt={product_name} className="object-fill" />
        </div>
        <div className="space-y-2 flex-1">
          <p>
            <span className="font-bold">Brand: </span>
            <span className="uppercase">{brand_name}</span>
          </p>
          <p>
            <span className="font-bold">Name: </span>
            <span>{product_name}</span>
          </p>
          <p>
            <span className="font-bold">Description: </span>
            <span>{description}</span>
          </p>
          <p>
            <span className="font-bold">Type: </span>
            <span>{type}</span>
          </p>
          <p>
            <span className="font-bold">Price: </span>
            <span>{price}</span>
          </p>
          <p>
            <span className="font-bold">Rating: </span>
            <span>{rating}</span>
          </p>
          <div className="flex justify-center md:justify-end pt-5">
            <Link
              to={`/cart/:${_id}`}
              className="px-4 py-2 bg-[#2658a3] hover:bg-transparent hover:border hover: border-[#2658a3] hover:text-black transition-all duration-300 rounded uppercase text-white font-medium"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
