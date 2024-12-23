import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContexComponent from "./Contex/ContexComponent.jsx";
import Home from "./Page/Home.jsx";
import Rooms from "./Page/Rooms.jsx";
import MyBookings from "./Page/MyBookings.jsx";
import Login from "./Page/Login.jsx";
import Register from "./Page/Register.jsx";
import Error from "./Page/Error.jsx";
import Details from "./Page/Details.jsx";
import PraivetRout from "./Component/PraivetRout.jsx";
import Upadete from "./Page/Upadete.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "rooms", element: <Rooms /> },
      { path: "update/:id", element: <Upadete /> },
      {
        path: "mybooking",
        element: (
          <PraivetRout>
            <MyBookings />
          </PraivetRout>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Error /> },
      { path: "details/:id", element: <Details /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContexComponent>
      <RouterProvider router={router} />
    </ContexComponent>
  </StrictMode>
);
