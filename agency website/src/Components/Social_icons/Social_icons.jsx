import React from 'react'
import { company_logos } from '../../assets/assets/assets.js'

const Social_icons = () => {
  return (
    <div id='social' className='w-full flex flex-col items-center justify-center gap-10 mt-20 min-h[50vh]'>
      <h1 className='text-2xl text-gray-700 dark:text-white font-medium'>Trusted By Leading Companies</h1>
      <div className="social_imges flex flex-wrap items-center gap-10 justify-center min-h-40 ">
    {company_logos.map((logo,index)=>(
      <img 
        src={logo.logo} 
        alt="company_logo" 
        className='w-40 h-20 object-contain cursor-pointer'
        key={index}
      />
    ))}
      </div>
    </div>
  )
}

export default Social_icons
