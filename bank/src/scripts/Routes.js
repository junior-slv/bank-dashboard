import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Card from '../pages/Card';
import { MainPage } from '../pages/MainPage';
import { Home } from '../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
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