import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginActionType, userSliceType } from "./types";

const initialState: userSliceType = {
    name: "",
    family: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<loginActionType>) {
            state.name = action.payload.name;
            state.family = action.payload.family;
        },

        logout(state, action: PayloadAction<undefined>) {
            state.name = '';
            state.family = '';
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;