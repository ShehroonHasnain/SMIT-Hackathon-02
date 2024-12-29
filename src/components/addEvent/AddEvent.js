import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './AddEvent.css'
import { Link } from 'react-router-dom'
import { createEventApiAction } from '../../redux/slices/eventSlice'


export default function AddEvent() {
    const allEvents = useSelector(state=>state.eventSlice.events)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [image, setImage] = useState(" https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")

const length = allEvents.data.length -1;

const onClickAddEvents = () => {
    let event = {
        id : length,
        title,
        description,
        // image,
        category,
        location,
      
    }
    console.log("product", event)
    dispatch(createEventApiAction(event))

}
  return (
    <div>
    <div className="form-container">
                <h1>Add an Event</h1>
                <form 
                
                 className="product-form">
                    <div className="form-group">
                        <input
                            type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}    required
                        />
                    </div>
                 
                    <div className="form-group">
                        <input
                            type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}   required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="category" onChange={(e) => setCategory(e.target.value)}   required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)}   required
                        />
                    </div>
                   <Link to='/' style={{alignItems:"center"}}> <button type="submit" className="submit-btn" onClick={onClickAddEvents}>Add</button></Link>
                   {/* <button type="submit" className="submit-btn" onClick={onClickAddProduct}>Add</button> */}
                </form>
               
            </div>
        </div>
  )
}
