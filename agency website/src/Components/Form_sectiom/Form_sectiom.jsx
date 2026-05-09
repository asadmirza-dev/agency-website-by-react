import React ,{ useState} from 'react'
import assets from '../../assets/assets/assets.js'

const Form_sectiom = ({title,subtitle}) => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d77924a9-ce66-4d95-a3fd-f72f194f8d9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full flex flex-col items-center justify-center gap-10 min-h-[70vh]'>
       <h1 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>{title}</h1>
      <p className='text-xl text-gray-600 dark:text-gray-300 font-medium text-center mt-4'>{subtitle}</p>
      <form className=' flex flex-col items-center justify-center gap-6' onSubmit={onSubmit}>
      <div className="form-sec-1 flex items-center gap-6 w-full">
          <div className="sec-1 flex flex-col gap-2 items-start relative">
            <label htmlFor="For Name" className='text-gray-600 font-bold text-2xl' >For Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' className='w-90 px-4  pl-12 py-4 text-xl border font-medium border-gray-300 rounded-lg  text-gray-700 dark:text-white' />
            <img src={assets.person_icon} alt="User Icon" className='absolute left-3 bottom-5 w-6 h-6'  />
        </div>
        <div className="sec-1 flex flex-col gap-2 items-start relative">
            <label htmlFor="For Email" className='text-gray-600 font-bold text-2xl' >For Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' className='  w-90 px-4 pl-12 py-4 text-xl font-medium border space-x-2 border-gray-300 rounded-lg text-gray-700 dark:text-white ' />
            <img src={assets.email_icon} alt="Email Icon" className='absolute left-3 bottom-5 w-6 h-6' /> 
        </div>
      </div>
      <div className="message flex flex-col gap-2 items-start w-full">
        <label htmlFor="For Message" className='text-gray-600 dar font-bold text-2xl' >For Message</label>
        <textarea name="message" placeholder='Enter Your Message' className='w-full px-4 py-4 text-xl font-medium border border-gray-300 rounded-lg min-h-50 text-gray-700 dark:text-white' />
      </div>
      <div className="submit-btn ">
        <button type='submit' className='px-10 py-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white text-2xl font-bold rounded-4xl hover:scale-105 transition-transform duration-300'>Submit</button>
      </div>
      <span >{result}</span>
      </form>
    </div>
  )
}

export default Form_sectiom
