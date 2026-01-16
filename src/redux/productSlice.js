import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import db from '../../server/db.json';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(db.products);
        }, 800);
    });
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;