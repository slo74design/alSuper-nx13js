"use client"; //this is a client side component
import JsonFinal from "@/lib/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _prodList: JsonFinal,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProductos: (state, action) => {
            state._prodList = action.payload;
        },
    },
});

export const { allProductos } = productsSlice.actions;

export default productsSlice.reducer;
