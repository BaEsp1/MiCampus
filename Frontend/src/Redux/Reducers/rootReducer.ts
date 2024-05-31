import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    // otros reducers
})

export default rootReducer