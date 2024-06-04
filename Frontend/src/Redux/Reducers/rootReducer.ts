import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import { authReducer } from "../auth";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
    // otros reducers
});

export default rootReducer;
