import { configureStore} from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        eventSlice: eventReducer,
        authSlice: authReducer,
        // Add the reducer here 
    }});