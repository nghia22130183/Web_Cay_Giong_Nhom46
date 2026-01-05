import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: JSON.parse(localStorage.getItem('wishlist')) || [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push(newItem);
                // Lưu vào LocalStorage
                localStorage.setItem('wishlist', JSON.stringify(state.items));
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.items));
        }
    }
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;