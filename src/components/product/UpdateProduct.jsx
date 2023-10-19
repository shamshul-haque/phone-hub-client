import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, product_img, product_name, brand_name, type, price, rating } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const product_img = form.product_img.value;
    const product_name = form.product_name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    form.reset();
    const updateProduct = {
      product_img,
      product_name,
      brand_name,
      type,
      price,
      rating,
    };

    const updatedProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });
      const data = await res.json();
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Product Updated Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    };
    updatedProduct();
  };
  return (
    <div className="px-5 md:px-10 lg:px-20 py-10">
      <Helmet>
        <title>PhoneHub | Update Product</title>
      </Helmet>
      <div className="flex flex-col items-center my-10">
        <div className="w-full max-w-sm bg-[#F4F3F0] rounded p-5">
          <h1 className="text-3xl text-[#374151] text-center font-bold">
            Update Existing Product
          </h1>
          <form onSubmit={handleUpdateProduct} className="mt-5 space-y-5 ">
            <div className="form-control">
              <input
                type="url"
                name="product_img"
                defaultValue={product_img}
                placeholder="Image URL"
                className="p-2 rounded outline-0 text-sm"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="product_name"
                defaultValue={product_name}
                placeholder="Product Name"
                className="p-2 rounded outline-0 text-sm"
              />
            </div>
            <div className="form-control">
              <select
                name="brand_name"
                defaultValue={brand_name}
                className="p-2 rounded outline-0 text-sm"
              >
                <option value="select">Brand Name</option>
                <option value="apple">apple</option>
                <option value="huawei">huawei</option>
                <option value="realme">realme</option>
                <option value="oppo">oppo</option>
                <option value="vivo">vivo</option>
                <option value="xiaomi">xiaomi</option>
              </select>
            </div>
            <div className="form-control">
              <select
                name="type"
                defaultValue={type}
                className="p-2 rounded outline-0 text-sm"
              >
                <option value="select">Type</option>
                <option value="smart">Smart</option>
                <option value="button">Button</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
            <div className="form-control">
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="p-2 rounded outline-0 text-sm"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="p-2 rounded outline-0 text-sm"
              />
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Submit"
                className="text-xl p-2 rounded border w-full text-center text-white hover:text-black bg-[#2658a3] hover:bg-transparent cursor-pointer hover:border-[#8d8e8f] font-medium uppercase transition-all duration-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
