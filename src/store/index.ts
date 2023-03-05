import {configureStore} from "@reduxjs/toolkit";
import {placeholderApi} from "./api/placeholder.api";

export const store = configureStore({
    reducer: {
        [placeholderApi.reducerPath]: placeholderApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(placeholderApi.middleware)
})