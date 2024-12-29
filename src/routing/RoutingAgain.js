import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AddEvent from "../components/addEvent/AddEvent";
import EventList from "../components/eventList/EventList";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/events",
      element: <EventList/>,
    },
    {
        path:"/AddEvent",
        element:<AddEvent/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
  
    
  
  ]);

  
  export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }