import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AddBrand from "../components/brand/AddBrand";
import Home from "../components/home/Home";
import AddProduct from "../components/product/AddProduct";
import ErrorPage from "../errorPage/ErrorPage";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/brand"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addBrand",
        element: <AddBrand />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
