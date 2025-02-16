import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
  FaPlus,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const properties = () => {
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
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black font-semibold leading-10 dark:text-white"
          >
            Explore The Latest
          </h1>
        </div>

        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl w-full"
            >
              <div
                id="image-box"
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div id="top" className="flex justify-between items-end w-full">
                  <div>
                    <button className="px-3 bg-red-600 hover:bg-white hover:text-black text-white rounded-full lg:text-[20px] text-[15px]">
                      Featured
                    </button>
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <button className="px-3 bg-blue-600 hover:bg-white hover:text-black text-white rounded-full lg:text-[20px] text-[15px]">
                      Sales
                    </button>

                    <button className="px-3 bg-blue-800 hover:bg-white hover:text-black text-white rounded-full lg:text-[20px] text-[15px]">
                      Active
                    </button>
                  </div>
                </div>

                <div
                  id="bottom"
                  className="flex justify-between items-end w-full"
                >
                  <div className="flex justify-start items-center gap-2">
                    <FaMapMarkerAlt className="text-white size-4" />
                    <h1 className="text-white">{item.address}</h1>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <FaVideo className="text-white size-4" />
                    <FaCamera className="text-white size-4" />
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-black dark:text-white text-xl font-semibold">
                  {item.name}
                </h1>
                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                  {item.price}
                </h1>
                <p className="dark:text-white font-semibold">{item.about}</p>
                <div
                  id="icons"
                  className="flex justify-center items-start gap-4"
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaBath className="text-red-400 size-5" />
                    <h1 className="dark:text-white">{item.bath}</h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <FaBed className="text-red-400 size-5" />
                    <h1 className="dark:text-white">{item.bed}</h1>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <MdSpaceDashboard className="text-red-400 size-5" />
                    <h1 className="dark:text-white">{item.area}</h1>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-300 mt-8"></div>
                <div
                  id="owner-info"
                  className="flex justify-between items-center w-full mt-2"
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaUserCircle className="text-red-400 size-5" />
                    <h1 className="dark:text-white font-semibold">
                      {item.owner}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="p-2 border-2 border-gray-200 hover:bg-gray-300/60 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                      <FaShareAlt className="size-4 text-red-400" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-gray-300/60 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                      <FaHeart className="size-4 text-red-400 hover:text-red-600" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-gray-300/60 cursor-pointer transform hover:scale-110 transition-transform duration-300">
                      <FaPlus className="size-4 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="zoom-out" data-aos-delay="50" className="flex justify-center items-center mb-4 mt-2"><button  className="px-6 py-2 bg-red-600 hover:bg-red-100 hover:text-black text-white rounded-full lg:text-[20px] text-[15px]">View More</button></div>
      </section>
      
      
    </div>
  );
};

export default properties;
