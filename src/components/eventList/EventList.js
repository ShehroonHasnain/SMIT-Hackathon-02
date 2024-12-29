import React, { useEffect, useState } from 'react'
import './EventList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEventApiAction, fetchEvents, updateEventApiAction } from '../../redux/slices/eventSlice';
import UpdatePopup from '../updatePopup/UpdatePopup';
import demoURL from "../../assets/demoIMG.jpg"

export default function EventList() {
    const events = useSelector(state => state.eventSlice.events);
    const dispatch = useDispatch();
    console.log("events in comp", events)

    useEffect(() => {
          if (events?.data.length==0){
            dispatch(fetchEvents())
        }
        dispatch(fetchEvents())
    
        }, [])

        const onClickDeleteProduct = (id)=>{
            console.log("delete product id", id)
            // dispatch(deleteProduct(id))
            dispatch(deleteEventApiAction(id))
            

            }
            const [UpdateState,setUpdateState]=useState(false)
            const [id,setId]=useState()
           
            
        const onClickUpdateProduct=(id)=>{
               console.log("update product id",id);
            //    dispatch(updateEventApiAction(id))
            setUpdateState(true)
            setId(id)
            
         
               
        }

  return (
    <div id='products'>
    { UpdateState && <UpdatePopup id={id} UpdateState={UpdateState} setUpdateState={setUpdateState} />}

    {events?.data?.map(event => {
        return (

            <div key={event?.id} className="card">
                <div style={{ padding: 10 }}>

                    {/* <img src={event?.image} alt={event.title} className="card-image" /> */}
                    <img src={demoURL} alt={event.title} className="card-image" />
                </div>
                <div className="card-content " >
                    <div className='list-comp'><h2>Title:</h2>
                    <h2 className='list-compt'>{event?.title}</h2></div>
                    
                    <div className='list-comp'>
                    <h3>Location:</h3>    
                    <p>{event?.location}</p>
                    </div>
                    <div  className='list-comp'>
                    <h3>category:</h3>  
                    <p>{event?.category}</p>
                    </div>
                    <div className='list-comp'>
                    <h3>description:</h3>  
                    <p>{event?.description}</p>
                    </div>
                    <div className='list-comp'>
                    <h3>Created at:</h3>  
                    <p>{event?.createdAt}</p>
                    </div>
                   <button onClick={()=>onClickUpdateProduct(event?.id)} className="update-btn lis3">Update</button>
                    <button onClick={()=>onClickDeleteProduct(event?.id)} className="update-btn" style={{ backgroundColor: "red" }}>Delete</button>
                
                </div>


            </div>
        )

    })}
</div>

  )
}
