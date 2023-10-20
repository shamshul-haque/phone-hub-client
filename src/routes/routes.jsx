import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AddBrand from "../components/brand/AddBrand";
import MyCart from "../components/cart/MyCart";
import Home from "../components/home/Home";
import AddProduct from "../components/product/AddProduct";
import Product from "../components/product/Product";
import ProductDetails from "../components/product/ProductDetails";
import UpdateProduct from "../components/product/UpdateProduct";
import ErrorPage from "../errorPage/ErrorPage";
import Root from "../layout/Root";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <AddBrand />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/product/:brand_name",
        element: <Product />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brand_name}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
