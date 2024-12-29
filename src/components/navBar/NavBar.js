import { useDispatch, useSelector } from "react-redux"
import "./NavBar.css"
import {BrowserRouter, Link} from "react-router-dom";
import img from '../../assets/logo.png'
import { logout } from "../../redux/slices/authSlice";


export default function Navabr() {
  const  allEvents=useSelector(state=>state.eventSlice.events?.data)
  console.log("event all in nav",allEvents);
  const dispatch = useDispatch()
  const count= allEvents?.length;

  const logoutHandle = ()=>{
    dispatch(logout())

}
  return (
    <div>
        <nav className="navbar">
    <div className="logo">My Events</div>
    {/* <div className="logo"> <img src={img} alt="Logo" /></div> */}
    <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/events' href="#products">Events({count})</Link></li>
      <li><Link to='/login' href="#about">Signup</Link></li>
      {/* <li><Link to="/signup">signup</Link></li> */}
      <button onClick={logoutHandle} className="highlight">Logout</button>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
  </div>
  )
}
