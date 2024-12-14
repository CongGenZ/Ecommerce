import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice, // Use a meaningful key, like "cart"
    },
});
