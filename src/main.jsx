import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import V2 from "./V2.jsx";
import V3 from "./V3.jsx";
import V4 from "./V4.jsx";
import V5 from "./V5.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/v1",
    element: <App />,
  },
  {
    path: "/v2",
    element: <V2 />,
  },
  {
    path: "/v3",
    element: <V3 />,
  },
  {
    path: "/v4",
    element: <V4 />,
  },
  {
    path: "/v5",
    element: <V5 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
