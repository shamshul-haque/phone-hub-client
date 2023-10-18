import { createBrowserRouter } from "react-router-dom";
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
