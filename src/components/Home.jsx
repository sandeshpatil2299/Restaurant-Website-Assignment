import React, { useState } from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            {/* hero section */}
            <div className='w-full flex flex-col lg:flex-row px-4 lg:px-72 py-5 lg:py-10'>
                <div className='w-full lg:w-[60%] h-full'>
                    <img className='w-full object-cover object-center' src="https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Home image" />
                </div>
                <div className='w-full lg:w-[40%] flex justify-center px-4 lg:px-6 bg-[#e0d0bd] py-6 lg:py-0'>
                    <div className='flex flex-col gap-3 lg:gap-5 justify-center mx-auto'>
                        <h1 className='text-3xl lg:text-5xl tracking-wide'>Food that tells a story, with every bite.</h1>
                        <p className='text-sm lg:text-base tracking-normal'>Catch the taste of the holidays with our limited time menu.</p>
                        <NavLink to="/menu">
                            <Button
                                variant="contained"
                                sx={{
                                    width: '50%',
                                    textAlign: 'center',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    },
                                    display: 'inline',
                                    borderRadius: 0,
                                    fontSize: '1rem',
                                    letterSpacing: '1px',
                                }}
                                className='tracking-wider'
                            >
                                Menu
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='mt-10 lg:mt-20 px-4 lg:px-72'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0'>
                    <div className=''>
                        <img className='block w-full object-cover object-center h-[300px] lg:h-[80%]' src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>

                    <div className='flex flex-col items-center justify-center gap-3 lg:gap-4 h-auto lg:h-[80%] text-center px-4 lg:px-10'>
                        <h1 className='text-lg lg:text-xl'>Adventurous or Comfort</h1>
                        <p className='text-sm lg:text-base'>Utilizing locally sourced, organic products, our award-winning chef mixes world class food and home-cooked favorites. </p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 mt-6 lg:mt-0'>
                    <div className='flex flex-col items-center justify-center gap-3 lg:gap-4 h-auto lg:h-[80%] text-center px-4 lg:px-10 order-2 lg:order-1'>
                        <h1 className='text-lg lg:text-xl'>Perfect Day or Night</h1>
                        <p className='text-sm lg:text-base'>On sunny days, enjoy your lunch with the beauty of the city. By night, move inside for a cozy, intimate evening. </p>
                        <a className='bg-[#dfd3c3] px-5 lg:px-7 py-3 lg:py-4 uppercase tracking-wider font-bold text-sm lg:text-base' href="">View Menu</a>
                    </div>

                    <div className='order-1 lg:order-2'>
                        <img className='block w-full object-cover object-center h-[300px] lg:h-[80%]' src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 mt-6 lg:mt-0'>
                    <div className=''>
                        <img className='block w-full object-cover object-center h-[300px] lg:h-[80%]' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>

                    <div className='flex flex-col items-center justify-center gap-3 lg:gap-4 h-auto lg:h-[80%] text-center px-4 lg:px-10'>
                        <h1 className='text-lg lg:text-xl'>Reserve</h1>
                        <p className='text-sm lg:text-base'>Small but mighty! Make sure you reserve your table at least a week in advance. We'd love to see you!</p>
                        <NavLink to="/reservation" className='bg-[#dfd3c3] px-5 lg:px-7 py-3 lg:py-4 uppercase tracking-wider font-bold text-sm lg:text-base inline-block'>Make a Reservation</NavLink>
                    </div>
                </div>
            </div>

            <div className='text-center bg-[#e9dfd3] px-4 lg:px-72 py-8 lg:py-16 w-full mt-10 mb-3 lg:mt-0'>
                <h1 className='w-full lg:w-1/3 mx-auto mb-6 lg:mb-8 text-xl lg:text-2xl'>Need help with reservations or have special requests? We're happy to assist!</h1>
                <NavLink to="/contact" className='bg-black inline-block text-white px-5 lg:px-7 py-3 lg:py-4 uppercase tracking-wider font-bold text-sm lg:text-base'>Contact Us</NavLink>
            </div>
        </>
    )
}

export default Home