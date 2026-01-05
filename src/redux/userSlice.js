import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: JSON.parse(localStorage.getItem('user')) || null,
    history: [],
    isLoading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Các hàm xử lý đang làm...
    }
});

export default userSlice.reducer;