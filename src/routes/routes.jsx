import { createBrowserRouter } from "react-router-dom";
import AddBrand from "../components/addBrand/AddBrand";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
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
    ],
  },
]);

export default router;
