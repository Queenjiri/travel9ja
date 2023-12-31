import React from 'react'
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
    const autoHide = () => {
        return window.location.pathname.includes('register') ||
        window.location.pathname.includes('login') ? "hidden" : "lg:flex" 
    }
  return (
    <>
        <footer className={`w-full bg-green-600 p-5 px-5 mt-12 lg:p-16 lg:px-28 flex justify-between items-center lg:items-start text-white bottom-0 ${autoHide()}`}>
            <h1 className='text-2xl font-bold'>Travul9ja</h1>

            <div className='lg:flex flex-col items-center hidden'>
                <h1 className='text-lg font-bold'>Company</h1>
                <Link to={'/about'}>About us</Link>
                <Link to={'/team'}>Team</Link>
            </div>
            
            <div className='lg:flex flex-col items-center hidden'>
                <h1 className='text-lg font-bold'>Experience</h1>
                <Link to={'/contact'}>Contact us</Link>
                <Link to={'/faq'}>FAQs</Link>
                <Link to={'/find'}>Find A Bus</Link>
            </div>
            
            <div className='lg:flex flex-col items-center hidden'>
                <h1 className='text-lg font-bold'>Terms</h1>
                <Link to={'/contact'}>Privacy & Policy</Link>
                <Link to={'/faq'}>Terms & Condition</Link>
            </div>
            
            <div className='lg:flex flex-col items-center hidden'>
                <h1 className='text-lg font-bold'>Connect With Us</h1>
                
                <div className="icons flex gap-3 mt-2">
                <FiTwitter size={20} />
                <FiLinkedin size={20} />
                <FiFacebook size={20} />
                </div>
            </div>

            <p className='lg:hidden'>&copy; 2023 All rights reserved.</p>

        </footer>
    </>
  )
}

export default Footer