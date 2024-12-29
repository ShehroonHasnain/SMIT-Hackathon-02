import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PublicRoute({children}) {
    const user = useSelector((store)=>store.authSlice.user)
    // const isAuthenticated = localStorage.getItem('token');
    return user ? <Navigate to="/" /> : children;
}
