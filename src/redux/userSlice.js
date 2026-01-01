import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: JSON.parse(localStorage.getItem('user')) || null,
    history: [], // Luôn để mảng rỗng làm mặc định
    isLoading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Các hàm xử lý của bạn...
    }
});

export default userSlice.reducer;