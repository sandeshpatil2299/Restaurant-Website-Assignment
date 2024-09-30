import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateContact: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetContact: () => initialState,
    },
});

export const { updateContact, resetContact } = contactSlice.actions;

export default contactSlice.reducer;