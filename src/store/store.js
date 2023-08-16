import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "@/features/productsSlice";

export const store = configureStore({
    reducer: {
        products: prodReducer,
    },
});
