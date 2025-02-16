import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../assets/images/logo4.png';
import { useDarkMode } from './DarkModeContext';
import { Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
// import { FaPhoneAlt, FaUserCircle, } from 'react-icons/fa';

const Header = () => {

  const { darkmode, toggleDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Properties',
      link: 'properties',
    },
    {
      name: 'Services',
      link: 'services',
    },
    {
      name: 'Testimonials',
      link: 'testimonials',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ];
  
  return (
    <div>
      <nav className={`${darkmode ? "dark bg-black" : "light bg-[#F3F3F3]"} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
        <div id='logo'>
          <img src={logo} alt="company logo" className='lg:w-[150px] w-[120px] dark:invert' />
        </div>

        <ul className='lg:flex justify-center items-center gap-8 hidden'>
          {navItems.map(({link, name}) => (
            <Link key={link} className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={link} spy={true} offset={-100} smooth={true}>
              
              {name}
              
            </Link>
          ))}
        </ul>

        {/* mobile-menu */}

        <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer' /> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer' /> }
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
             <ul className='flex flex-col justify-center items-center gap-2 w-full'>
               {navItems.map(({link, name}) => (
                 <Link key={link} className='text-white font-semibold  cursor-pointer px-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={link} spy={true} offset={-100} smooth={true} >
                     {name}
                 </Link>
               ))}
             </ul>
        </div>

        {/* <div className='flex justify-center items-center lg:gag-8 gap-2'>
           <div className='flex justify-center items-center lg:gap-3 gap-1'>
             <FaPhoneAlt className='size-5 text-red-600 ' />
             <h1 className='lg:texe-xl text-sm text-black dark:text-white font-semibold'>9200069069</h1>
           </div>
          
          
          <FaUserCircle className='size-6 text-red-600' />
        </div> */}
       <div className={`${darkmode ? "dark bg-black" : "light bg-[#F3F3F3]"} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
  {user ? (
    <>
      <h5 className="bg-yellow-300 text-black p-3 rounded-xl">{user.username}</h5>
      <button className="text-black bg-blue-600 p-3 rounded-xl" onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      {/* Login Button */}
      <Button className="bg-orange-400 hover:bg-red-600 p-3 rounded-xl">
      <NavLink to="/login" className="text-white ">Login</NavLink> 
      </Button>

      {/* Signup Button */}
      <Button className="text-black text-bold bg-blue-600 hover:bg-blue-900 p-3 rounded-xl">
      <NavLink to="/register" className="text-white no-underline">SignUp</NavLink>  
      </Button>
    </>
  )}
</div>
      </nav>

    </div>
  )
};

export default Header;
