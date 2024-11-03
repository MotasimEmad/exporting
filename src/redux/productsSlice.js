import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const getProducts = createAsyncThunk('product/getProducts', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch(apiEndpoints.getProducts, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server did not return JSON!');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return rejectWithValue(error.message);
    }
});

const productsSlice = createSlice({
    name: "product",
    initialState: { 
        products: null,
        isLoading: false, 
        error: null 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = null;
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;