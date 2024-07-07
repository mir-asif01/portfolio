import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home/Home";

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
        path: "/projects",
        element: <h1>projects route</h1>,
      },
      {
        path: "/about",
        element: <h1>about route</h1>,
      },
    ],
  },
]);

export default routes;
