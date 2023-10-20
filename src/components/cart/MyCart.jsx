import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [cart, setCart] = useState(loadedCart);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteItem = async () => {
          const res = await fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
            const remaining = cart.filter((item) => item._id !== id);
            setCart(remaining);
          }
        };
        deleteItem();
      }
    });
  };

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
          {cart.map((item) => (
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
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-gray-200 p-2 rounded"
                >
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
