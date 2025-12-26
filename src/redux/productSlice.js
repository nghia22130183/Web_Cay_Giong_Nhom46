import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Tạo Thunk để gọi API (Bất đồng bộ)
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // Lưu ý: Đảm bảo bạn đang chạy json-server ở port 5000
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
            throw new Error('Không thể tải dữ liệu');
        }
        const data = await response.json();
        return data;
    }
);

// 2. Tạo Slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],      // Chứa danh sách 500 sản phẩm
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        // Các reducer đồng bộ nếu cần (ví dụ: filter, sort tại client)
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload; // Gán dữ liệu API vào state
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;