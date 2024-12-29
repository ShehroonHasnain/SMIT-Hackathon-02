import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk(
    "event/fetchEvents",
    async () => {
        const response = await fetch("http://localhost:8000/events/");
        const data = await response.json();
        console.log("data in fetchEvents action", data);

        return data;
    }
);

export const deleteEventApiAction = createAsyncThunk(
    "event/deleteEvent",
    async (id) => {
        const response = await fetch(`http://localhost:8000/events/delete/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log("data in deleteEvent action", data);
        return id;
    });

export const updateEventApiAction = createAsyncThunk(
    "event/updateEvent",
    async (updatedEvent) => {
       
        try {
            let _id = updatedEvent._id;
            const updatedData = {
                id: updatedEvent.id,
                title: updatedEvent.title,
                description: updatedEvent.description,
                category: updatedEvent.category,
                location: updatedEvent.location
            }
            console.log('data in update api action', updatedEvent);
            let id = updatedEvent.id

            const response = await fetch(`http://localhost:8000/events/update/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),

            });
            const result = await response.json();
            console.log("data in updateEvent action", result);
            return { updatedData };
        } catch (error) {
            console.log(error)
        }





    }


);

export const createEventApiAction = createAsyncThunk(
    "product/createProduct",
    async (event) => {
        let newEvent = {
            id: event.id,
            title: event.title,
            description: event.description,
            location: event.location,
            category: event.category,
            // image:event.image,
            createdAt: new Date()
        }

        const raw = JSON.stringify(newEvent);
        console.log("raw", raw);
        const token = localStorage.getItem("token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: raw,
        };
        const response = await fetch("http://localhost:8000/events/create", requestOptions)
        console.log("response", response)
        const result = await response.json()
        console.log("data", result)
        console.log("Add todo")
        return { result }
    }
)

export const eventSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        deleteProduct: (state, action) => {
            let id = action.payload
            let filterProduct = state.products.data.filter(product => product.id !== id)
            state.products = filterProduct
        },


    },
    extraReducers: builder => {

        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            console.log("fetch products in reducer", action.payload);

            state.events = action.payload;
        },)
        builder.addCase(deleteEventApiAction.fulfilled, (state, action) => {
            console.log("delete product in reducer", action.payload);
            let id = action.payload.id;
            let filteredEvents = state.events.data.filter(event => event.id !== id);
            state.events.data = filteredEvents;
        },)
        builder.addCase(updateEventApiAction.fulfilled, (state, action) => {
            let updateEvent = action.payload.updatedData
            console.log('update product in action', updateEvent);
            const index = state.events.data.findIndex(item => item.id === updateEvent.id);
            let filterUpdateEvent = state.events.data.splice(index, updateEvent.id, {
                ...state.events.data[index], ...updateEvent
            })
            console.log('filterUpdateProduct in reducer', filterUpdateEvent);



        },)
        builder.addCase(createEventApiAction.fulfilled, (state, action) => {
            console.log('add product action', action.payload);
            // state.products = [action.payload, ...state.products]
            state.events.data = [...state.events.data, action.payload.result.data]

        },)

    }
}
);

export const { deleteProduct, addProduct, updateProduct } = eventSlice.actions;
export default eventSlice.reducer;