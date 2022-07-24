import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Routes = () =>
  useRoutes([
    { path: "/*", element: <Home /> },
    { path: "/home/*", element: <Home /> },
    { path: "/about/*", element: <About /> },
    { path: "/contact/*", element: <Contact /> },
  ]);

function AppRoute() {
  return <Routes />;
}

export default AppRoute;
