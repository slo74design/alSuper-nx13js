"use client"; //this is a client side component
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _favList: [],
};

export const favSlice = createSlice({
    name: "favs",
    initialState,
    reducers: {
        allFavs: (state, action) => {
            state._favList = action.payload;
        },
        toggleFav: (state, action) => {
            const itemInFavs = state._favList.find(
                (item) => item.ID === action.payload.ID
            );
            if (itemInFavs) {
                state._favList = state._favList.filter(
                    (item) => item.ID !== action.payload.ID
                );
            } else {
                state._favList.push(action.payload);
            }
        },
    },
});

export const { allFavs, toggleFav } = favSlice.actions;

export default favSlice.reducer;
