import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../MainLout/MainLaout";
import Home from "../Home/Home";
import About from "../Components/about/About";
import Login from "../Components/login/Login";
import Register from "../Components/register/Register";
import Ditales from "../Components/Survice/Ditales";
import PrivetRouter from "../Components/PrivetRoute/PrivetRouter";
import ErrorElement from "../Components/register/ErrorElement/ErrorElement";


const MyCreateRouter = createBrowserRouter([
    {
      path:"/",
      element:<MainLaout></MainLaout>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("/data.json")
        },

        {

         path:'/brithdays/:id',
         element:<PrivetRouter> <Ditales></Ditales></PrivetRouter>,
         loader:()=>fetch("/data.json")


        },
        {
            path:"/about",
            element:<About></About>,
            loader:()=>fetch("/bloge.json")
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>

        }
      ]
    }
])

export default MyCreateRouter;