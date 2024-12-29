import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const logout= createAsyncThunk(
    "auth/logout",
    async ()=>{
        try {
            // await signOut(auth)
            var token = localStorage.getItem("token");
            console.log("token bfr del",token);
            
             localStorage.removeItem("token"); 
             localStorage.removeItem("user")
            return true
        } catch (error) {
            console.log(error);
            
        }
    }
)



export const login = createAsyncThunk(
    "auth/login",
    async (user) => {
        user.setLoading(true)
        let newUser = {email:user.email, password:user.password}
        try {
            const raw = JSON.stringify(newUser);
            console.log("raw",raw);
            
              const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: raw,
              };
            const  response =  await fetch(`http://localhost:8000/auth/login`, requestOptions)
            console.log("response",response)
            const result = await response.json()
            console.log("data",result)
            localStorage.setItem("token", result?.data?.token);
            localStorage.setItem("user", result?.data)
            
            user.setLoading(false)
            return {result}
        } catch (error) {
            console.log("error",error);
            user.setLoading(false)
            
        }
       
    }
)

export const signup = createAsyncThunk(
    'auth/signup',
    async (user) => {
        let newUser= {
            email: user.email,
            name: user.name,
            password: user.password,
            phone: user.phone,
            address: user.address,
            gender: user.gender,
            createdAt: new Date()}
            console.log("newUser",newUser);
            


        
        try {
            user.setLoading(true)
            const raw = JSON.stringify(newUser);
            console.log("raw",raw);
            
              const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: raw,
              };
            const  response =  await fetch(`http://localhost:8000/auth/signup`, requestOptions)
            console.log("response",response)
            const result = await response.json()
            console.log("data",result)
            localStorage.setItem("token", result?.data?.token);
            localStorage.setItem("user", result?.data)
            
            user.setLoading(false)
            return{result}
        } catch (error) {
            user.setLoading(false)
            console.log("error",error)
          
        }
       
    }
    
)


const initialState = {
    user: localStorage.getItem('user') || null, 
  };
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(signup.fulfilled, (state,action)=>{
            console.log("action", action.payload);
            state.user = action.payload.result.data
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            console.log("action in login", action.payload);
            state.user = action.payload.result.data
            console.log("state.user",state.user)
        })
        builder.addCase(logout.fulfilled, (state,action)=>{
            console.log("action in login", action.payload);
            state.user = null
        })

    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer