// import React from 'react'
// import assets from '../../assets/assets/assets.js'

// const Hero_section = () => {
//   return (
//     <div className='flex flex-col items-center justify-center gap-10 lg:max-w-8xl mx-auto text-center mt-10 md:max-w-6xl sm:max-w-4xl relative min-h-screen'>
//       <div className="peoples_group flex items-center gap-1.5 border-gray-500 border-2 px-4 py-2 rounded-full">
//         <img src={assets.group_profile} alt="" />
//         <p>Trusted by 10k+ peoples</p>
//       </div>
//       <div className="hero_title max-w-4xl mt2">
//         <h1 className='text-9xl font-medium mb-4 text-black md:text-6xl sm:text-4xl'>Building the future of <span className='bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent'>digital</span> experiences.</h1>
//         <p className='text-2xl font-medium text-gray-600 md:text-2xl sm:text-xl mb-2'>We combine modern design with high-performance code to help your brand stand out in the digital age.</p>
//       </div>
//       <div className="hero-img">
//         <img src={assets.hero_img} alt="" />
//       </div>
//       <img src={assets.bgImage1} alt="" className='absolute bottom-40 left-40  z-[-1]' />
//     </div>
//   )
// }

// export default Hero_section
import React from 'react'
import assets from '../../assets/assets/assets.js'

const Hero_section = () => {
  return (
    // min-h-screen ko py-20 se replace karein taake content scrollable ho mobile par
    <div id='home' className='relative flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto text-center pt-20 px-4 overflow-hidden'>
      
      {/* Trusted Badges - Padding aur Font size theek ki */}
      <div className="peoples_group flex items-center gap-2 border-gray-300 border px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
        <img src={assets.group_profile} alt="Profiles" className="w-20 md:w-24" />
        <p className="text-sm md:text-base font-medium text-gray-700">Trusted by 10k+ users</p>
      </div>

      {/* Hero Title - text-9xl bohot bara hai, isay optimize kiya */}
      <div className="hero_title max-w-5xl">
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-500 leading-[1.1]'>
          Building the future of <br className="hidden md:block" />
          <span className='bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent'>
            digital
          </span> experiences.
        </h1>
        
        <p className='text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed'>
          We combine modern design with high-performance code to help your brand stand out in the digital age.
        </p>
      </div>

      {/* Main Hero Image - Responsive width */}
      <div className="hero-img w-full max-w-4xl mt-4">
        <img src={assets.hero_img} alt="Hero Illustration" className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* Background Decorative Image - Mobile par hidden rakhein taake layout kharab na ho */}
      <img 
        src={assets.bgImage1} 
        alt="" 
        className='absolute bottom-10 left-[-10%] z-[-1] opacity-50 hidden lg:block w-[400px]' 
      />
    </div>
  )
}

export default Hero_section