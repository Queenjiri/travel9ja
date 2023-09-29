import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiUser } from 'react-icons/fi'
import { Button } from '@material-tailwind/react'

const Navbar = () => {
  return (
    <>
        <nav className='lg:flex bg-white justify-between w-full py-5 px-28 items-center hidden'>
            <div className='flex gap-20 items-center'>
                <h1 className='text-4xl font-bold'>Logo</h1>

                <div className="flex gap-5 text-black menu">
                    <Link to={'/'}>Flight</Link>  
                    <Link to={'/'}>Hotels</Link>
                    <Link to={'/checkout'}>Car Hire</Link>
                </div>
            </div>

            <div className="nav-action-btn flex items-center gap-4">
                <Link to={'/'} className='text-green-600'>Login</Link>
                <Link to={'/search'}>
                    <Button variant='gradient' color='green' size='lg' className='rounded-full capitalize'>Create account</Button>
                </Link>
            </div>
        </nav>

        {/* Mobile View */}
        <nav className='flex bg-white justify-between w-full py-5 px-5 items-center lg:hidden'>
            <div className='flex gap-20 items-center'>
                <h1 className='text-4xl font-bold'>Logo</h1>
            </div>

            <div className="nav-action-btn flex items-center gap-4">
                <FiUser size={23} className='cursor-pointer' />
                <FiMenu size={23} className='cursor-pointer' />
            </div>
        </nav>
    </>
  )
}

export default Navbar