import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { authSlice } from "../auth/authSlice";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authSlice.reducer
    // otros reducers
})

export default rootReducer