import React from 'react'
import assets from '../../assets/assets/assets.js'  

const Advertising_Section = ({title,subtitle}) => {
const data = [{title:'Social Media',desc:'Maximize your online presence and engage with your audience on social platforms.',img:assets.social_icon},
    {title:'Content Writing',desc:'Maximize your online presence and engage with your audience on social platforms.',img:assets.content_icon},
    {title:'Advertising',desc:'Maximize your online presence and engage with your audience on social platforms.',img:assets.ads_icon},
    {title:'Digital Marketing',desc:'Maximize your online presence and engage with your audience on social platforms.',img:assets.marketing_icon}
]
  return (
    <div id='services' className='w-full flex flex-col items-center justify-center gap-10 mt-20 min-h[90vh]'>
      <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>{title}</h1>
      <p className='text-xl text-gray-600 dark:text-gray-300 font-medium text-center mt-4'>{subtitle}</p>
      <div className="grid-boxes grid grid-cols-4 gap-6 mt-10 sm:grid-cols-2 max-sm:grid-cols-1 md:px-4 ">
        
          {data.map((item)=>(
            <div className="box1 flex items-center gap-4 px-6 py-15 border border-gray-200 dark:border-slate-700 rounded-xl shadow-2xl dark:shadow-none bg-white dark:bg-slate-800/40 backdrop-blur-sm transition-transform duration-300 hover:scale-103 " key={item.title}>
            {/* <img src={item.img} alt={item.title} className='w-20 h-20 border-1 rounded-full shadow-gray-300' /> */}
            <div className="flex-shrink-0 ">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
            <div className="box-desc flex flex-col gap-2 ">
              <h2 className='text-2xl font-bold text-gray-800 dark:text-slate text-start'>{item.title}</h2>
              <p className='text-xl text-gray-700 dark:text-gray-400 font-medium text-start'>{item.desc}</p>
            </div>
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Advertising_Section
