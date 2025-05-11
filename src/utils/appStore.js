import { configureStore } from "@reduxjs/toolkit";
import userReducer from  "./userSlice"
import feedReducer from "./feedSlice"
import toggleReducer from "./toggleSlice";
import connectionsReducer from "./connectionsSlice"
const appStore = configureStore({
    reducer :{
        user : userReducer,
        feed : feedReducer,
        toggle:toggleReducer,
        connections : connectionsReducer

    }
})
export default appStore;