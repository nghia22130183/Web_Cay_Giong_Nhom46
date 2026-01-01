import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice'; // Import nó vào
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer, // Bây giờ biến này đã được định nghĩa ở trên
        user: userReducer,
    },
});