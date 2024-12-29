
import React, { useEffect, useState } from 'react'
import './UpdatePopup.css'

import { useSelector ,useDispatch} from 'react-redux';
import { updateEventApiAction } from '../../redux/slices/eventSlice';


export default function UpdatePopup(props) {

    let id =props.id
    console.log('product id in updatePopup',id);
   const  allEvents=useSelector(state=>state.eventSlice.events)
   const filterUpdateEvent=allEvents.data.filter(event=>event.id===id)
   console.log('filterUpdateProduct in popup',filterUpdateEvent);
   
  
  
  
    const [title, setTitle] = useState("")
    
      const [description, setDescription] = useState("")
      const [category, setCategory] = useState("")
     const [location, setLocation] = useState("")
  
  
  const dispatch=useDispatch()
  useEffect(()=>{
    if(filterUpdateEvent){
    setTitle(filterUpdateEvent[0].title)
    setDescription(filterUpdateEvent[0].description)
    setCategory(filterUpdateEvent[0].category)
    setLocation(filterUpdateEvent[0].location)
  }
    
  
  },[])
  const onClickUpdateEvent = (e) => {
    let event = {
        _id:filterUpdateEvent[0]._id,
        id,
        title,
        description,
        category,
        location
    }
    console.log("event to be updtae OnCLickUpdateEvent", event)
    dispatch(
      updateEventApiAction( event
        //   id: product.id, 
        //   updatedData: {
        //     title:event.title,
        //     description: event.description,
        //     category: event.category,
        //     location: event.location
        //   },
      )
  );
    let setUpdate=props.setUpdateState(false)
    e.preventDefault()
  
  }

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className="form-container">
              <h1>Update an Event</h1>
              <form 
              
               className="product-form">
                  <div className="form-group">
                      <input value={title } type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}    required/>
                  </div>
             
                  <div className="form-group">
                      <input value={description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}   require />
                  </div>
                  <div className="form-group">
                      <input value={category} type="text" placeholder="category" onChange={(e) => setCategory(e.target.value)}   required/>
                  </div>
                  <div className="form-group">
                      <input value={location} type="text" placeholder="location" onChange={(e) => setLocation(e.target.value)}   required/>
                  </div>
                  <button  type="submit" className="submit-btn" onClick={onClickUpdateEvent}>Add</button>
              </form>
          </div>
      
    </div>
  </div>
  )
}
