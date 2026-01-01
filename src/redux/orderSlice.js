import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        history: JSON.parse(localStorage.getItem('orders')) || [],
    },
    reducers: {
        placeOrder: (state, action) => {
            const newOrder = {
                id: `ORD-${Date.now()}`,
                date: new Date().toLocaleString('vi-VN'),
                items: action.payload.items,
                totalAmount: action.payload.totalAmount,
                status: 'Đang xử lý',
            };
            state.history.unshift(newOrder);
            localStorage.setItem('orders', JSON.stringify(state.history));
        },
    },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;