import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddBrand = () => {
  const handleAddBrand = (e) => {
    e.preventDefault();

    const form = e.target;
    const brand_name = form.brand_name.value;
    const brand_img = form.brand_img.value;
    form.reset();
    const newBrand = { brand_name, brand_img };

    const postBrand = async () => {
      const res = await fetch("http://localhost:5000/brand", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBrand),
      });
      const data = await res.json();
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "New Brand Added Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    };
    postBrand();
  };

  return (
    <div className="px-5 md:px-10 lg:px-20">
      <Helmet>
        <title>PhoneHub | Add Brand</title>
      </Helmet>
      <div className="flex flex-col items-center my-10">
        <div className="w-full max-w-sm bg-[#F4F3F0] rounded p-5">
          <h1 className="text-3xl text-[#374151] text-center font-bold">
            Add New Brand
          </h1>
          <form onSubmit={handleAddBrand} className="mt-5 space-y-5 ">
            <div className="form-control">
              <input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                name="brand_img"
                placeholder="Image URL"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <input
              type="submit"
              value="Add"
              className="text-xl p-2 rounded border w-full text-center text-white hover:text-black bg-[#2658a3] hover:bg-transparent cursor-pointer hover:border-[#8d8e8f] font-medium uppercase transition-all duration-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
