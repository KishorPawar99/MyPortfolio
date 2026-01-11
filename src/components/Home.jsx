import React from "react";
import logo from "/src/assets/icon.jpg";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section id="home" className="sm:h-screen sm:mt-0 mt-10 flex flex-col-reverse gap-10 sm:flex justify-center sm:flex-row sm:justify-evenly items-center scroll-mt-20">
        <div className="px-10 py-2 flex flex-col sm:items-start justify-center items-center" data-aos="fade-right" >
          <h1 className="text-white text-xl md:text-3xl font-semibold tracking-wide">
            Hello, Myself
          </h1>

          <h2 className="text-3xl md:text-5xl tracking-wider font-bold text-orange-500 mt-2">
            Kishor Pawar
          </h2>

          <h3 className="text-lg mt-2 text-gray-200">
            And I'm a{" "}
            <span className="inline-block w-52  text-orange-400 font-medium tracking-wide">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Developer",
                  "Frontend Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <div>
            <a
              href=""
              className="inline-block mt-4 md:mt-6 mb-4 px-6 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-black transition"
            >
              Resume Download
            </a>
          </div>
          <Footer/>
        </div>
        <div className="border-2 border-orange-500 rounded-full" data-aos="fade-left">
          <img
            className="w-56 sm:w-72 md:w-96 p-1 rounded-full shadow-md shadow-orange-500"
            src={logo}
            alt="profile image"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
