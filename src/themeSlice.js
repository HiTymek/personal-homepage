import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./localStorage";

const initialState = {
    theme: getThemeFromLocalStorage(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: state => {
            state.theme = !state.theme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = state => state.theme;
export const selectTheme = state => selectThemeState(state).theme;

export default themeSlice.reducer;