import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const { user } = useContext(AuthContext);
  const { email } = user;

  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(
        `https://brand-shop-serve-side-63i22v5jh-shamshul-haque.vercel.app/cart/${email}`
      );
      const data = await res.json();
      console.log(data);
      setCart(data);
    };
    getItem();
  }, [email]);

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
          const res = await fetch(
            `https://brand-shop-serve-side-63i22v5jh-shamshul-haque.vercel.app/cart/${id}`,
            {
              method: "DELETE",
            }
          );
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
