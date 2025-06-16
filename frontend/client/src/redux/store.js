// frontend/src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
// Import other reducers (e.g., cartSlice, orderSlice) as you create them

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;