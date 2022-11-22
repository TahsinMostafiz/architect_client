import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import MyReview from "../Pages/Home/Services/MyReview";
import AddService from "../Pages/Home/Services/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myReviews",
        element: (
          <PrivetRoutes>
            <MyReview></MyReview>
          </PrivetRoutes>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivetRoutes>
            <AddService></AddService>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
