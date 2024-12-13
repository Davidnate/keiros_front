import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from '../features/sidebarSlice'
import themeReducer from '../features/themeSlice'
import userReducer from '../features/userSlice'
import tableReducer from '../features/tableSlice'

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer, //Reducer del sidebar
        theme: themeReducer,
        user: userReducer,
        table: tableReducer,
    },
})


export const RootState = store.getState;
export const AppDispatch = store.dispatch;