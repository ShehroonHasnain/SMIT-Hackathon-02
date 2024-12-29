import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";


import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Signup from "../pages/signup/Signup";
import EventList from "../components/eventList/EventList";
import AddEvent from "../components/addEvent/AddEvent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
        // element: <Home/>,
    },
    {
        path: "/signup",
        element: <PublicRoute><Signup/></PublicRoute>
        // element: <Signup/>
    },
    {
        path: "/login",
        element: <PublicRoute><Login /></PublicRoute>
        // element: <Login/>
    },
    {
        path: "/events",
        element: <PrivateRoute><EventList /></PrivateRoute>,
        // element: <Home/>,
    },
   
    {
        path:"/AddEvent",
        element: <PrivateRoute><AddEvent /></PrivateRoute>,
        // element: <Home/>,
    },


]);
export default function Routing(params) {
    return (
        <RouterProvider router={router} />
    )
}