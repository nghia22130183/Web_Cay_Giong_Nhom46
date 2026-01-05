import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        history: JSON.parse(localStorage.getItem('orders')) || [],
        userProfile: JSON.parse(localStorage.getItem('userProfile')) || {
            name: "Nguyễn Văn Tiến",
            email: "tien.nguyen@example.com",
            phone: "0901234567",
            address: "123 Đường ABC, Quận 1, TP.HCM"
        },
    },
    reducers: {
        addOrder: (state, action) => {
            const newOrder = {
                id: `ORD-${Date.now()}`,
                date: new Date().toLocaleString('vi-VN'),
                items: action.payload.items,
                totalAmount: action.payload.totalAmount,
                customerInfo: action.payload.customerInfo,
                status: 'Chờ xác nhận',
            };
            state.history.unshift(newOrder);
            localStorage.setItem('orders', JSON.stringify(state.history));
        },
        updateProfile: (state, action) => {
            state.userProfile = { ...state.userProfile, ...action.payload };
            localStorage.setItem('userProfile', JSON.stringify(state.userProfile));
        }
    },
});

export const { addOrder, updateProfile } = orderSlice.actions;
export default orderSlice.reducer;