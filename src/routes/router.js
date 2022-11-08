import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import AllServices from "../pages/Home/Services/AllServices";
import Services from "../pages/Home/Services/Services";

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
            path: "/services",
            element: <Services></Services>,
          },
          {
            path: "/allservices",
            element: <AllServices></AllServices>,
          },
        ],
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
