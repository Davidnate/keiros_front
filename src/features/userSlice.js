import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        name: "Juan Enrique",
        photo: "#"
    },
    loggedIn: true
}

const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.loggedIn = false;
            state.user = {};
        },
    },
});

export const { logout } = userSlice.actions
export default userSlice.reducer;