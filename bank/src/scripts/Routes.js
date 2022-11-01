import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Card from '../pages/Card';
import  Login  from '../pages/MainPage';
import { Home } from '../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/card",
    element: <Card/>,
  },
]);
export default router;