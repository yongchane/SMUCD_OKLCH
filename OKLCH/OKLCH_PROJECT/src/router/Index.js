import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const Loading = lazy(() => import("../component/Loading"));
const Cardirect = lazy(() => import("../page/studies"));
const Studies = lazy(() => import("../page/studies"));
const Gui = lazy(() => import("../page/gui"));
const Main = lazy(() => import("../page/main"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "gui",
        element: (
          <Suspense fallback={<Loading />}>
            <Gui />
          </Suspense>
        ),
      },
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "studies",
        element: (
          <Suspense fallback={<Loading />}>
            <Studies />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
