import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App