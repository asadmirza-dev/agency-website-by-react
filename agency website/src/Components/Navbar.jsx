import React, { useState } from 'react'
import assets from '../assets/assets/assets.js'

const Navbar = ({ theme, setTheme }) => {
  const [Ismenuopen, setIsmenuopen] = useState(false)

  return (
    <nav className='flex items-center justify-between bg-white/90 dark:bg-[#0f172a]/90 h-20 px-6 md:px-12 lg:px-24 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 dark:border-b dark:border-gray-800'>
      <img 
        src={assets.logo1} 
        alt="Agency Logo" 
        className='w-40 sm:w-48 lg:w-56 cursor-pointer' 
      />
    <div className={`

  max-sm:fixed max-sm:inset-y-0 max-sm:right-0 max-sm:top-0 max-sm:h-[70vh] max-sm:rounded-b-2xl max-sm:w-[280px] 
  max-sm:flex max-sm:flex-col max-sm:bg-blue-400  max-sm:text-white 
  max-sm:pt-28 max-sm:px-10 max-sm:z-[999] max-sm:shadow-2xl 
  transition-all duration-500 ease-in-out flex items-center gap-8
  ${Ismenuopen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}
  sm:static sm:flex-row sm:text-gray-600 dark:sm:text-gray-300
`}>
        
       <button 
    className="absolute top-6 right-8 sm:hidden p-2 bg-white/10 rounded-full" 
    onClick={() => setIsmenuopen(false)}
  >
    <img src={assets.close_icon} alt="Close" className="w-6 invert" />
  </button>

        <a href="#home" onClick={() => setIsmenuopen(false)} className='hover:text-blue-500 sm:dark:hover:text-blue-400 transition-colors'>Home</a>
        <a href="#social" onClick={() => setIsmenuopen(false)} className='hover:text-blue-500 sm:dark:hover:text-blue-400 transition-colors'>Social</a>
        <a href="#services" onClick={() => setIsmenuopen(false)} className='hover:text-blue-500 sm:dark:hover:text-blue-400 transition-colors'>Services</a>
        <a href="#work" onClick={() => setIsmenuopen(false)} className='hover:text-blue-500 sm:dark:hover:text-blue-400 transition-colors'>Our Work</a>
        <a href="#contact" onClick={() => setIsmenuopen(false)} className='hover:text-blue-500 sm:dark:hover:text-blue-400 transition-colors'>Contact Us</a>
      </div>

      <div className='flex items-center gap-4'>
        
        <div 
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all" 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <img 
            src={theme === 'dark' ? assets.sun_icon : assets.moon_icon} 
            alt="Theme Toggle" 
           className={`w-6 h-6 transition-all duration-300 ${theme === 'dark' ? 'invert opacity-100' : 'opacity-70'}`}/>
        </div>
        <a href="#contact" className='hidden md:flex bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold items-center gap-2 hover:bg-blue-700 transition-all'>
          Connect <img src={assets.arrow_icon} width={12} alt="" />
        </a>
        <button 
          className='sm:hidden p-2 active:scale-95 transition-transform' 
          onClick={() => setIsmenuopen(true)}>
          <img 
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
            alt="Menu" 
            className="w-7"/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar