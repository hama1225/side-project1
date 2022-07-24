import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Naver from "./pages/Naver";
import SearchTrend from "./components/naver/search-trend/SearchTrend";

// const Routes = () =>
//   useRoutes([
//     { path: "/*", element: <Home /> },
//     { path: "/home/*", element: <Home /> },
//     { path: "/about/*", element: <About /> },
//     { path: "/contact/*", element: <Contact /> },
//     { path: "/naver/*", element: <Naver /> },
//   ]);

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/naver" element={<Naver />} />
        <Route path="/naver/searchTrend" element={<SearchTrend />} />
      </Routes>
    </>
  );
}

export default AppRoute;
