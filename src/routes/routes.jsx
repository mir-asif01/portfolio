import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
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
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
