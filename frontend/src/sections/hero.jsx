import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdLocationOn } from "react-icons/md";

const Hero = () => {
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
    <>
      <div className={`${darkmode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-x1 flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl font-semibold text-white lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find Your Dream Home{" "}
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0 "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            iure architecto dicta cupiditate. Nemo laboriosam veniam ex, maiores
            vero molestiae?
          </p>
        </section>
      </div>

      <div
        className={`${
          darkmode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkmode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-20`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white justify-start flex">
              <MdLocationOn className="text-2xl" />
              &nbsp;LOCATION
            </h1>
            <input
              type="text"
              placeholder="Search Location"
              className="bg-gray-100  p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercials</option>
              <option value="Option3">Events</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Option1">Apartments</option>
              <option value="Option2">Duples</option>
              <option value="Option3">Shop</option>
              <option value="Option3">Hall</option>
              <option value="Option3">Resort</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-120 transition-transform-300">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
