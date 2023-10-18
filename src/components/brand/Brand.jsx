import { useLoaderData } from "react-router-dom";

const Brand = () => {
  const loadedBrands = useLoaderData();

  return (
    <div className="px-5 md:px-10 lg:px-20 py-10 ">
      <h1 className="text-3xl font-bold">Brand Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {loadedBrands.map((brand) => (
          <div
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
            <button className="text-xl p-2 rounded border w-full text-center text-white hover:text-black bg-[#2658a3] hover:bg-transparent cursor-pointer hover:border-[#8d8e8f] font-medium uppercase transition-all duration-500">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
