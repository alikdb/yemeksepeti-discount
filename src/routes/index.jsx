import { createBrowserRouter } from "react-router-dom"
import Layout from "~/layouts";
import FiftyDiscounts from "~/pages/fifty-discounts";
import Home from "~/pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fifty-discounts",
        element: <FiftyDiscounts />,
      },
    ]
  }
])

export default routes
