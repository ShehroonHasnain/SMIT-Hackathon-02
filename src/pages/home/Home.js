import React from 'react'
import Navabr from '../../components/navBar/NavBar'
import HeroSection from '../../components/heroSection/HeroSection'
import EventList from '../../components/eventList/EventList'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <Navabr />
    <HeroSection />
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", height: 200, padding:40,}}>
        <h3 style={{padding:30,}}>Add More Events</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>

            <Link to={"/AddEvent"}><button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }} >Add Event</button></Link>
            {/* <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }} >Add Event</button> */}
            </div></div>
    <EventList/>
    
</div>
  )
}
