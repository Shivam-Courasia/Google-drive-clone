import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import GoogleDrive from "./components/GoogleDrivepage/GoogleDrive.jsx";
import Mydrive from "./components/Sidebar items/Mydrive.jsx";
import ComputerCom from "./components/Sidebar items/ComputerCom.jsx";
import StarredComp from "./components/Sidebar items/StarredComp.jsx";
import RecentCom from "./components/Sidebar items/RecentCom.jsx";
import ShareWme from "./components/Sidebar items/ShareWme.jsx";
import SpamCom from "./components/Sidebar items/SpamCom.jsx";
import BinCom from "./components/Sidebar items/BinCom.jsx";
import Storage from "./components/Sidebar items/Storage.jsx";
import Header from "./components/GoogleDrivepage/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/drive",
    element: <GoogleDrive />,
  },
  {
    path: "/mydrive",
    element: <Mydrive />,
  },
  {
    path: "/computer",
    element: <ComputerCom />,
  },
  {
    path: "/starred",
    element: <StarredComp />,
  },
  {
    path: "/recent",
    element: <RecentCom />,
  },
  {
    path: "/shared",
    element: <ShareWme />,
  },
  {
    path: "/spam",
    element: <SpamCom />,
  },
  {
    path: "/bin",
    element: <BinCom />,
  },
  {
    path: "/storage",
    element: <Storage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
