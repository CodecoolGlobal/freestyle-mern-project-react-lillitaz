import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "flowbite/dist/flowbite.css";
import "flowbite/dist/flowbite.js";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FavoriteMovies from "./pages/FavoriteMovies";
import AGB from "./pages/AGB";
import Account from "./pages/Account";
import RegistrationPage from "./pages/RegistrationPage";
import UserUpdater from "./pages/Settings";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FavoriteMovies from "./pages/FavoriteMovies";
import AGB from "./pages/AGB";
import Account from "./pages/Account";
import RegistrationPage from "./pages/RegistrationPage";
import UserUpdater from "./pages/Settings";
import Signout from "./pages/Signout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/settings",
        element: <UserUpdater />,
      },
      {
        path: "/favorites",
        element: <FavoriteMovies />,
      },
      {
        path: "/signout",
        element: <Signout />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/AGB",
        element: <AGB />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
