import React, { useState } from 'react';
import { TextField, Button, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../images/logo.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Message sent");
    };

    return (
        <div className={`w-full flex flex-col justify-center ${isMobile ? 'px-4' : 'lg:px-72'}`}>
            <div className={`${isMobile ? 'w-full' : 'w-1/3'} mx-auto bg-white rounded-md`}>
                <h2 className={`${isMobile ? 'text-xl' : 'text-2xl mt-16'} font-bold mb-6 text-center`}>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={`${isMobile ? 'mb-3' : 'mb-4'}`}>
                        <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            required
                        />
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
                            fontSize: '1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Send Message
                    </Button>
                </form>
            </div>

            {/* address and timing */}
            <div className={`${isMobile ? 'mt-8' : 'mt-16'}`}>
                <h1 className={`${isMobile ? 'text-lg' : 'text-xl'} uppercase`}>Address and Timing</h1>
                {!isMobile && (
                    <div className="w-1/2 mx-auto text-center mt-5">
                        <h1 className="uppercase mb-6 text-xl">FOODER is Available</h1>
                        <p>Have a comment or a question? Are you interested in booking our circle table for your book club or other discussion group? Send us a message, and we will get back to you as soon as possible.</p>
                    </div>
                )}

                <div className={`${isMobile ? 'w-full flex-col mt-8' : 'flex mt-8'} items-center mx-auto text-center `}>
                    <div className={`${isMobile ? 'mb-8' : ''}`}>
                        <img src={logo} alt="logo" className='w-2/12 mx-auto filter brightness-150' />
                        <h1>2105 Aviation Way, Los Angeles, CA 90017</h1>
                        <h1>+91 9529595729</h1>
                    </div>

                    <div>
                        <h1 className={`uppercase ${isMobile ? 'mb-3 text-lg' : 'mb-6 text-xl'}`}>hours</h1>
                        <h1>Monday - Friday: 6am - 3pm </h1>
                        <h1>Saturday - Sunday: 7am - 3pm</h1>
                    </div>
                </div>
            </div>

            {/* social */}
            <div className={`${isMobile ? 'mt-8 mb-3' : 'mt-8 mb-16'}`}>
                <h1 className={`${isMobile ? 'text-lg' : 'text-xl'} uppercase`}>Social</h1>
                <div className={`flex items-center justify-center gap-12 ${isMobile ? "mt-3" : "mt-10   "}`}>
                    <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "32"} height={isMobile ? "24" : "32"} viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#E4405F"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white"></line>
                        </svg>
                    </NavLink>
                    <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "32"} height={isMobile ? "24" : "32"} viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2"></path>
                        </svg>
                    </NavLink>
                    <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "32"} height={isMobile ? "24" : "32"} viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFFFFF"></polygon>
                        </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Contact;
