import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './slices/reservationSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
    reducer: {
        reservation: reservationReducer,
        contact: contactReducer,
    },
});
