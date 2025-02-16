import React, { useEffect } from 'react';
import {client} from '../components/export'
import { useDarkMode } from '../components/DarkModeContext';
import {FaStar} from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const clients = () => {

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
    <div className={`${darkmode ? "dark bg-black" : "light bg-transparent"}`}>
      <section id="testimonials" className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 py-20 px-6 gap-10'>
       <div className='flex flex-col justify-center items-start gap-4'>
         <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">OUR CLIENTS</h1>
         <h1 data-aos="zoom-in" className='text-black dark:text-white font-semibold text-[40px] leading-10'>What out clients <br/> think about us</h1>
       </div>

      <div id="client-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
        {client.map((item, index) => (
          <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'>
            <div className='flex flex-col justify-start items-center gap-4'>
              <img src={item.image} alt="" className='w-[70px] transform hover:scale-110 transition-transform duration-300' />
               <div className='flex flex-col justify-center items-start gap-1'>
                 <h1 className='text-black dark:text-white text-xl font-semibold'>{item.name}</h1>
                 <h1 className='text-slate-600 dark:text-white'>{item.text}</h1>
               </div>
            </div>
            <p className='text-md text-justify text-slate-600 dark:text-white'>{item.feedback}</p>
            <div className='flex justify-start items-start g-2 w-full'>
             <FaStar className='size-4 text-yellow-400' />
             <FaStar className='size-4 text-yellow-400' />
             <FaStar className='size-4 text-yellow-400' />
             <FaStar className='size-4 text-yellow-400' />
             <FaStar className='size-4 text-yellow-400' />
            </div>
          </div>
        ))}
      </div>

      </section>
    </div>
  )
};

export default clients;
