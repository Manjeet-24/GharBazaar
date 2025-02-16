import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun, } from 'react-icons/fa'
import {Link} from 'react-scroll'
import {IoMdMail} from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

const Footer = () => {
  const { darkmode, toggleDarkMode } = useDarkMode(); // Corrected "toggleDarkmode" to "toggleDarkMode"

  return (
    <>
      <footer className={`${darkmode ? "dark bg-black" : "light bg-gray-800"} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-col-3 grid-col-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia possimus laborum deserunt optio omnis ut laboriosam atque deleniti! Provident, corrupti.
          </p>
          <div id="social-icons" className="flex flex-row justify-start items-center gap-4 mt-4">
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer trsnsform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer trsnsform hover:scale-110 transition-transform duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer trsnsform hover:scale-110 transition-transform duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer trsnsform hover:scale-110 transition-transform duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">Copyright GharBazaar, All Rights Reserved</h1>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">+91 6288026969</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">9548 52148</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">gharbazaar69@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>
          <div className="flex justify-center items-center gap-4">
            <img src={prop7} alt="" className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" />
            <div>
              <h1 className="text-lg text-white">Villa with lake view</h1>
              <p className="text-slate-400">₹ 2,50,000/month</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src={prop8} alt="" className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300" />
            <div>
              <h1 className="text-lg text-white">Villa with hill view</h1>
              <p className="text-slate-400">₹ 1,50,000/month</p>
            </div>
          </div>
        </div>
      </footer>

      <div id="icon-box" className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-red-500 fixed lg:top-52 right-6 top-6"
        >
          {darkmode ? <FaMoon size={25} className="text-black" /> : <FaSun size={25} className="text-black" />}
        </button>
      </div>
    </>
  );
};

export default Footer;
