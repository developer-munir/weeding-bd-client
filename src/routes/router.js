import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddToService from "../pages/AddToService/AddToService";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import AllServices from "../pages/Home/Services/AllServices";
import Services from "../pages/Home/Services/Services";
import MyReviews from "../pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Services></Services>,
          },
          {
            path: "/allservices",
            element: <AllServices></AllServices>,
          },
        ],
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
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoservice",
        element: (
          <PrivateRoute>
            <AddToService></AddToService>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
