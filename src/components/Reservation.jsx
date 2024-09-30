import React, { useState } from 'react';
import { TextField, Button, MenuItem, useMediaQuery } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useTheme } from '@mui/material/styles';

const Reservation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [people, setPeople] = useState(1);
    const [dateTime, setDateTime] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation submitted");
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            select
                            label="Number of People"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                            required
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="Reservation Date and Time"
                                value={dateTime}
                                onChange={(newValue) => setDateTime(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth required />}
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
