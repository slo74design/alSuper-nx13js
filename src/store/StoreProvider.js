"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { NextUIProvider } from "@nextui-org/react";

export const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
                <NextUIProvider>{children}</NextUIProvider>
            </PersistGate>
        </Provider>
    );
};
