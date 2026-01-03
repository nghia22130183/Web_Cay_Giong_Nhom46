import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },

        // 1. Xóa một sản phẩm hoàn toàn khỏi giỏ
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },

        // 2. Xóa sạch giỏ hàng (Để gọi sau khi addOrder thành công)
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    },
});

// QUAN TRỌNG: Bạn phải liệt kê clearCart ở đây để Cart.jsx không bị lỗi import
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;