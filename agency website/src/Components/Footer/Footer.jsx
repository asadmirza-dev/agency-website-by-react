import React from 'react'
import assets from '../../assets/assets/assets.js'

const Footer = () => {
  return (
    <div className=' dark:bg-gray-900 w-full flex flex-col items-center  gap-10 min-h-[40vh] bg-gry-50 text-white max-sm:min-h-[20vh]'>
      <div className="footer-content flex items-center justify-between max-w-full mx-auto px-8 sm:px-12 lg:px-24 xl:px-40 py-10 sm:flex-row flex-col gap-10">
        <div className="footer-left w-[70%] flex flex-col justify-start max-sm:items-center items-start gap-6 ">
        <img src={assets.logo1} alt="" className='w-80 h-50 ' />
        <p className='text-gray-500 text-2xl sm:text-xl font-medium w-[60%] max-sm:w-full'>From concept to creation, we bring your ideas to life. We are a team of experienced designers and developers who are passionate..</p>
        <div className="social_links flex items-center gap-6 mt-7 sm:text-sm max-sm:flex-wrap max-sm:justify-center">
            <a href="#home" className='hover:border-b-2 hover:border-blue-600 font-medium text-2xl text-gray-600'>Home</a>
            <a href="#home" className='hover:border-b-2 hover:border-blue-600 font-medium text-2xl text-gray-600'>About</a>
            <a href="#home" className='hover:border-b-2 hover:border-blue-600 font-medium text-2xl text-gray-600'>Services</a>
            <a href="#home" className='hover:border-b-2 hover:border-blue-600 font-medium text-2xl text-gray-600'>Portfolio</a>
            <a href="#home" className='hover:border-b-2 hover:border-blue-600 font-medium text-2xl text-gray-600'>Contact</a>
        </div>
      </div>
      <div className="footer-right w-[30%] flex flex-col items-start justify-start gap-4 max-sm:items-center max-sm:w-full">
        <h2 className='text-3xl font-medium  text-gray-800 dark:text-white'>Subscribe to Our Newsletter</h2>
        <p className='text-xl font-medium  text-gray-600 dark:text-gray-300'>Stay updated with our latest news and offers.</p>
        <div className="email flex items-center w-full max-sm:flex-col gap-4">
            <input type="email" placeholder='Enter Your Email' className='px-4 py-2 text-xl font-medium border border-gray-300 rounded-lg text-white' />
            <button type='submit' className='px-4 py-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white text-2xl font-bold rounded-lg hover:scale-105 transition-transform duration-300'>Subscribe</button>
        </div>
      </div>
      </div>
      <div className="line" className='w-[90%] h-1 bg-gray-300'></div>
      <div className="copyright className='text-gray-600 dark:text-white text-xl font-medium  max-sm:text-center max-sm:w-full'">
        <p className='mb-4'>copyright 2026 &copy; Luminary Digital All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
