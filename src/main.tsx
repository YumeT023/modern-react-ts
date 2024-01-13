import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Home} from "./pages/home";
import "./index.css";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
