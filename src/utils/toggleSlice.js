import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name: "toggle",
    initialState:{
        isEditMode : false
    },
    reducers:{
        toggleMode : (state) => {
             state.isEditMode = !state.isEditMode
        }
    }
})
export const { toggleMode } = toggleSlice.actions;
export default toggleSlice.reducer;