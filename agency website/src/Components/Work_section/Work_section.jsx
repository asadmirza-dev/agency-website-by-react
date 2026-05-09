import React from 'react'
import assets from '../../assets/assets/assets.js'

const Work_section = ({title,subtitle}) => {
    const work_data =[{title:'Mobile App Design',desc:'Maximize your online presence and engage with your audience on social platforms.',img:assets.work_mobile_app},
        {title:'Fitness Website',desc:'Create a stunning website that showcases your brand and drives results.',img:assets.work_fitness_app},
        {title:'Dashboard Design',desc:'Design intuitive and engaging user experiences that delight your customers.',img:assets.work_dashboard_management}
    ]
  return (
    <div id='work' className='w-full flex flex-col items-center justify-center gap-10 mx-auto min-h-[90vh]'>
      <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>{title}</h1>
      <p className='text-xl text-gray-600 dark:text-gray-300  font-medium text-center'>{subtitle}</p>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
        {work_data.map((item)=>(
            <div className="box flex flex-col items-start gap-4  bg-white dark:bg-slate-800/40 transition-transform duration-300 hover:scale-103 max-w-3xl p-4 rounded-2xl" key={item.title}>
                <img src={item.img} alt={item.title}  />
                <h2 className='text-2xl font-bold text-gray-800 dark:text-slate-100'>{item.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 text-xl font-medium w-2/3'>{item.desc}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Work_section
