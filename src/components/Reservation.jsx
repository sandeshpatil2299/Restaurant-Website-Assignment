import React, { useState } from 'react';
import { TextField, Button, MenuItem, useMediaQuery } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { updateReservation, resetReservation } from '../redux/slices/reservationSlice';
import { current } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const Reservation = () => {
    const dispatch = useDispatch();
    const reservation = useSelector((state) => state.reservation);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (e) => {
        dispatch(updateReservation({ [e.target.name]: e.target.value }));
    };

    const handleDateTimeChange = (newValue) => {
        dispatch(updateReservation({ dateTime: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation submitted", reservation);
        dispatch(resetReservation());
    };

    return (
        <div className={`w-full h-full flex flex-col justify-center ${isMobile ? 'px-4' : 'lg:px-72'}`}>
            <div className={`${isMobile ? 'w-full' : 'w-1/3'} mx-auto p-6 bg-white rounded-md`}>
                <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-6 text-center`}>Reserve a Table</h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={reservation.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={reservation.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={reservation.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            select
                            label="Number of People"
                            name="people"
                            value={reservation.people}
                            onChange={handleChange}
                            required
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'} w-full text-center`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Date and Time"
                                value={reservation.dateTime}
                                onChange={handleDateTimeChange}
                                fullWidth
                                minDate={dayjs().startOf('day')}
                                maxDate={dayjs().add(2, 'day').endOf('day')}
                                renderInput={(params) => <TextField {...params} required fullWidth />}
                                shouldDisableDate={(date) => {
                                    const today = dayjs().startOf('day');
                                    const twoDaysFromNow = today.add(2, 'day').endOf('day');
                                    return !date.isBetween(today, twoDaysFromNow, null, '[]');
                                }}
                            />
                        </LocalizationProvider>
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#dfd3c3',
                            boxShadow: 'none',
                            borderRadius: 0,
                            color: 'black',
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Reserve
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Reservation;
