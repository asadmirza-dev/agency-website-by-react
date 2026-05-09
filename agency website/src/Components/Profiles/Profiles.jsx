import React from 'react'
import {teamData} from '../../assets/assets/assets.js'
const Profiles = ({title,subtitle}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10  min-h-[70vh]'>
      <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>{title}</h1>
      <p className='text-xl text-gray-600 dark:text-gray-300  font-medium text-center'>{subtitle}</p>
        <div className="profiles grid lg:grid-cols-4 gap-8 sm:grid-cols-2 w-full max-w-7xl mt-10 sm:flex-wrap">
            {teamData.map((member,index)=>(
                <div className="profile flex items-center gap-4 bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-103 " 
                key={index}>
                    <img src={member.image} alt="" className='w-20 h-20 md:w-24 md:h-24 border-1 rounded-full shadow-gray-300 flex-shrink-0' />
                    <div className="profile-desc flex flex-col items-start overflow-hidden">
                        <h2 className='text-2xl font-bold text-gray-800 dark:text-slate-100 truncate w-full'>{member.name}</h2>
                        <p className='text-xl text-gray-700 dark:text-gray-300 font-medium text-start leading-tight'>{member.title}</p>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Profiles

