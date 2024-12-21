import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContexComponent from "./Contex/ContexComponent.jsx";
import Home from "./Page/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{path:"/", element:<Home/>}]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContexComponent>
      <RouterProvider router={router} />
    </ContexComponent>
  </StrictMode>
);
