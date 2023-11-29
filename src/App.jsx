import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import View from "./pages/View";
import Create from "./pages/Create";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/create/:id",
      element: <Create />,
    },
    {
      path: "/view",
      element: <View />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={4000} />
    </>
  );
};

export default App;
