import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import AOS from "aos";
import "aos/dist/aos.css";

const contact = () => {

  useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);
  
    const { darkmode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkmode ? "dark bg-black" : "light bg-transparent"} pb-20`}>
      <section id='contact' className={`${darkmode ? "dark bg-gray-800" : "light bg-red-100"} lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 px-6 gap-10`}>
        <div data-aos="zoom-in" className='bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl'>
          <h1 className='text-2xl font-semibold text-black dark:text-white'>Send us a message today</h1>
          <input type="text" placeholder='Enter your full name here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
          <input type="email" placeholder='Enter a valid email' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
          <input type="number" placeholder='Enter your mobile number' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message here....' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'></textarea>
          <button className='bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
        </div>

        <div className='flex flex-col justify-center items-start g-8 lg:p-2 p-6'>
          <h1 data-aos="zoon-in" data-aos-delay="200" className='text-2xl font-semibold text-red-500 dark:text-white'>RACH US</h1>
          <h1 data-aos="zoom-in" data-aos-delay="300" className="text-black dark:text-white text-[40px] font-semibold leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel excepturi architecto enim possimus. Libero esse dolores veritatis inventore recusandae!</h1>
          <p data-aos="zoom-in" data-aos-delay="600" className='text-xl text-gray-600 text-justufy dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, optio obcaecati. Nemo totam optio adipisci deserunt placeat, doloribus explicabo at sequi. Sint vero quasi quaerat nesciunt officia quidem corporis ipsum?</p>

          <button className='bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
        </div>
        
      </section>
    </div>
  )
};

export default contact;
