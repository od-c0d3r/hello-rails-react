import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
    'message/fetchMessage',
    async (thunkAPI) => {
        const response = await fetch('api/greeting.json');
        return response.json();
    }
)

export const messageSlice = createSlice({
    name: 'message',
    initialState: { message: {} },
    extraReducers: (builder) => {
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default messageSlice.reducer;
