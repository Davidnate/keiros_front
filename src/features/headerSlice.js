import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : 'Pagina desconocida'
};

const titleSlice = createSlice ({
    name: 'pageTitle',
    initialState,
    reducers: {
        seTitle: (state, action) => {
            state.title = action.payload;
        },
    },
});

export const { seTitle } = titleSlice.actions;
export default titleSlice.reducer;