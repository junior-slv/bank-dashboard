import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "../../pages/Login/Login";
import Cadastro from "../../pages/Cadastro/Cadastro";
import Card from "../../pages/Card/Card";
import ProtectedRoutes from "./ProtectedRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/card",
    element: <Card/>,
  },
]);
export default router;

