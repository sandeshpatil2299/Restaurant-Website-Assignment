import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ['Home', 'Menu', 'Reservation', 'Contact'];

    const drawer = (
        <div className="h-full bg-[#f6f3ef] flex flex-col">
            <div className="flex justify-end p-4">
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#E4405F"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white"></line>
                    </svg>
                </NavLink>
                <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2"></path>
                    </svg>
                </NavLink>
                <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFFFFF"></polygon>
                    </svg>
                </NavLink>
            </div>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item} className="flex justify-center">
                        <NavLink 
                            to={`/${item.toLowerCase()}`} 
                            className="w-full"
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: '2rem',
                                        textAlign: 'center',
                                        fontWeight: 200,
                                        transition: 'font-weight 0.3s ease'
                                    }
                                }}
                                className="hover:font-bold"
                            />
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <nav className="flex flex-col items-center bg-white px-5 pt-5 lg:px-72 lg:py-10">
            <div className="w-full lg:mb-8">
                {isMobile ? (
                    <>
                        <div className='flex items-center'>
                            <div>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>

                            <div className='w-full px-2 flex items-center justify-between'>
                                <img src={logo} alt="logo" className='w-1/4' />
                                <a href="tel:+919529595729" className="text-sm">+91 9529595729</a>
                            </div>
                        </div>


                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            PaperProps={{
                                sx: { width: '100%' }
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <div className='w-full grid grid-cols-3 items-center'>
                        <div className="flex space-x-4">
                            <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#E4405F"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white"></line>
                                </svg>
                            </NavLink>
                            <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#1877F2"></path>
                                </svg>
                            </NavLink>
                            <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FFFFFF"></polygon>
                                </svg>
                            </NavLink>
                        </div>

                        <img src={logo} alt="logo" className='w-1/4 mx-auto filter brightness-150' />

                        <a href="tel:+919529595729" className="text-base text-right font-helvetica-now tracking-widest">+91 9529595729</a>
                    </div>
                )}
            </div>
            {
                isMobile ? "" : (
                    <div className="flex justify-center text-lg space-x-8 tracking-widest">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item}
                                to={`/${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-[#cc811e] relative group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cc811e] transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
