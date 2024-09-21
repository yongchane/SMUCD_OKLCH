import React from "react";
import "./scss/style.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/Index";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
