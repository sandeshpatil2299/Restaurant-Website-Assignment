import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
    people: 1,
    dateTime: null,
};

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        updateReservation: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetReservation: () => initialState,
    },
});

export const { updateReservation, resetReservation } = reservationSlice.actions;

export default reservationSlice.reducer;