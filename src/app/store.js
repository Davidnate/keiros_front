import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../features/sidebarSlice'
import themeReducer from '../features/themeSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer, //Reducer del sidebar
        theme: themeReducer,
    },
})


export default store