import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import wishlistReducer from './wishlistSlice';
import orderReducer from './orderSlice'; // 1. BẮT BUỘC phải import cái này

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        user: userReducer,
        orders: orderReducer, // 2. Khai báo orders để trang Profile có thể lấy dữ liệu
    },
});