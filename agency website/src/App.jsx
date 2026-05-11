import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero_section from './Components/Hero section/Hero_section'
import Social_icons from './Components/Social_icons/Social_icons'
import Advertising_Section from './Components/Advertising_Section/Advertising_Section'
import Work_section from './Components/Work_section/Work_section'
import Profiles from './Components/Profiles/Profiles'
import Form_sectiom from './Components/Form_sectiom/Form_sectiom'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if(theme==='dark'){
      document.documentElement.classList.add('dark')

    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  

  return (
    // 'dark' class yahan add hogi agar theme dark hai
    <div>
      <div className="bg-white dark:bg-[#0f172a] min-h-screen">
        
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="w-full overflow-x-hidden">
          <Hero_section />          
          
          <div className="w-full flex flex-col gap-16 sm:gap-24 px-5 sm:px-10 md:px-20">
            <Social_icons />
            <Advertising_Section 
              title={'How Can We Help You?'} 
              subtitle={'Our team of experts combines creativity and technology to deliver innovative solutions.'} />
            
            <Work_section 
              title={'Our Latest Work'} 
              subtitle={'We offer a wide range of services to help you reach your goals.'} />
            
            <Profiles 
              title={'Meet The team'} 
              subtitle={'Our team of experts combines creativity and technology to deliver innovative solutions.'} />
            
            <Form_sectiom 
              title={'Reach to us'} 
              subtitle={'Have questions or want to learn more? Fill out the form below.'} />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App