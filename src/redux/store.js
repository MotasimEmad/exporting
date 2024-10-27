import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productDetailsSlice from "./productDetailsSlice";
import messagesSlice from "./messagesSlice";


export const store = configureStore({
    reducer: {
        product: productsSlice,
        productDetails: productDetailsSlice,
        message: messagesSlice,
    }
});