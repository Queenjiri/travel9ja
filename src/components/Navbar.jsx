import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiUser } from 'react-icons/fi'
import { Button } from '@material-tailwind/react'



const Navbar = () => {

const[clicked, isClicked] = useState(false)


    const autoHide = () => {
        return window.location.pathname.includes('register') ||
        window.location.pathname.includes('login') ? "hidden" : "lg:flex" 
    }
  return (
    <>
        <nav className={`bg-white justify-between w-full py-5 px-28 items-center hidden ${autoHide()}`}>
            <div className='flex gap-20 items-center'>
                <h1 className='text-2xl font-bold color-green'>Travul<span className="variant='gradient' style={{ fontFamily: 'rubik' }} color='green' ">9ja</span></h1>

                <div className="flex gap-5 text-black menu">
                    <Link to={'/'}>Flight</Link>  
                    <Link to={'/'}>Hotels</Link>
                    <Link to={'/checkout'}>Bus Hire</Link>
                </div>
            </div>

            <div className="nav-action-btn flex items-center gap-4">
                <span onClick={() => window.location.href = '/login'} to={'/'} className='text-green-600 cursor-pointer'>Login</span>
                <p onClick={() => window.location.href = '/login'} className='cursor-pointer'>
                    <Button variant='gradient' style={{ fontFamily: 'rubik' }} color='green' size='lg' className='rounded-full capitalize'>Create account</Button>
                </p>
            </div>
        </nav>

        {/* Mobile View */}
        <nav className={`flex bg-white justify-between w-full py-5 px-5 items-center lg:hidden ${autoHide()}`}>
            <div className='flex gap-20 items-center'>
                <h1 className='text-4xl font-bold' variant='gradient' style={{ fontFamily: 'rubik' }} color='green'>Travel9ja</h1>
            </div>

            <div clicked={clicked} isclicked={isClicked} className="nav-action-btn flex items-center gap-4">
                <FiUser size={23} className='cursor-pointer' />
                <FiMenu size={23} className='cursor-pointer' />
            </div>

            {clicked ? <Navbar/> :null}
        </nav>
    </>
  )
}

export default Navbar