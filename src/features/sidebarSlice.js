import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false, //estado inicial del sidebar
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen; //cambia el estado abierto/cerrado
        },
        openSidebar: (state) => {
            state.isOpen = true; //Abre el sidebar
        },
        closeSidebar: (state) => {
            state.isOpen = false; // cierra el sidebar
        },
    },
});

export const {toggleSidebar, openSidebar, closeSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;