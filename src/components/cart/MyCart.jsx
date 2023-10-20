import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCart = useLoaderData();

  return (
    <div className="overflow-x-auto px-5 md:px-10 lg:px-20 py-10">
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand Name</th>
            <th>Product Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loadedCart.map((item) => (
            <tr key={item._id}>
              <td>{item.product_name}</td>
              <td>{item.brand_name}</td>
              <td>
                <img
                  src={item.product_img}
                  alt={item.product_name}
                  className="w-10"
                />
              </td>
              <td>
                <button className="bg-gray-200 p-2 rounded">
                  <AiFillDelete className="text-red-600 text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
