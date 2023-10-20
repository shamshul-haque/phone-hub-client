import { Link, useLoaderData } from "react-router-dom";

const Brand = () => {
  const loadedBrands = useLoaderData();

  return (
    <div className="px-5 md:px-10 lg:px-20 py-10 ">
      <h1 className="text-3xl font-bold uppercase text-center">
        Brand Categories
      </h1>
      <p className="text-center uppercase">
        Discover The Categories to see collections
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {loadedBrands.map((brand) => (
          <Link
            to={`/product/${brand.brand_name}`}
            key={brand._id}
            className="p-5 bg-white shadow-xl rounded space-y-4"
          >
            <img
              src={brand.brand_img}
              alt={brand.brand_name}
              className="w-40 h-40 rounded-full mx-auto"
            />
            <h2 className="text-center text-xl">
              <span className="font-bold">Brand: </span>
              <span className="uppercase">{brand.brand_name}</span>
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
