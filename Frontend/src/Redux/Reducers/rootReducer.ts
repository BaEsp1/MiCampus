import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import { authReducer } from "../auth";
import teacherReducer from "./teacherReducer";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    teacher: teacherReducer
    // otros reducers
});

export default rootReducer;
