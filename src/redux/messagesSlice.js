import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoints from "./apiEndpoints";

export const sendMessage = createAsyncThunk('message/sendMessage', async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(apiEndpoints.sendMessage, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
  
      const data = await response.json();
      return { data };
  
    } catch (error) {
      return rejectWithValue(error);
    }
  });

const messagesSlice = createSlice({
    name: "message",
    initialState: { isLoading: false, success: null, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.success = action.payload;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default messagesSlice.reducer;
