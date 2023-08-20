"use client"; //this is a client side component
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _cartList: [],
    _totalCart: 0,
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        allCart: (state, action) => {
            state._cartList = action.payload;
        },
        addToCart: (state, action) => {
            const itemInCart = state._cartList.find(
                (item) => item.ID === action.payload.ID
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state._cartList.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            state._cartList = state._cartList.map((prj) =>
                prj.id === action.payload.id ? action.payload.title : title
            );
        },
        deleteCart: (state, action) => {
            state._cartList = state._cartList.filter(
                (item) => item.ID !== action.payload
            );
        },
        incrementQuantity: (state, action) => {
            const item = state._cartList.find(
                (item) => item.ID === action.payload
            );
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state._cartList.find(
                (item) => item.ID === action.payload
            );
            if (item.quantity > 1) {
                item.quantity--;
            } else if (item.quantity === 1) {
                state._cartList = state._cartList.filter(
                    (item) => item.ID !== action.payload
                );
            }
        },
        emptyCart: (state, action) => {
            state._cartList = [];
        },
    },
});

export const {
    allCart,
    addToCart,
    updateCart,
    deleteCart,
    incrementQuantity,
    decrementQuantity,
    emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
