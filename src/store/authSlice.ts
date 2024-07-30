import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface UserState {
    status: boolean
    userData: any
  }

  
const initialState:UserState= {
    status : false,
    userData:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction)=>{
            state.status = true;
            state.userData = action.payload
        },
        authLogout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
});

export const {setUser,authLogout} = authSlice.actions;
export const userData = (state: RootState) => state.auth.userData;
export const status = (state: RootState) => state.auth.status;

export default authSlice.reducer