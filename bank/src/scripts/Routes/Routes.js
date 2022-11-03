import {
  createBrowserRouter,
} from "react-router-dom";
import MainApp from "../../pages/MainApp/MainApp";
import Card from "../../pages/Card/Card";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
  },

  {
    path: "/card",
    element: <Card/>,
  },
]);
export default router;

