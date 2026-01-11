import React from "react";
import education from "./data/education.json";

const AboutMe = () => {
  return (
    <section id="aboutme" className="mt-2 sm:h-fit m-10 scroll-mt-20">
      <div className="flex flex-col justify-center items-center p-2" data-aos="zoom-in" data-aos-duration="2000">
        <h1 className="text-3xl sm:text-5xl text-white font-bold tracking-wide">
          About Me
        </h1>
        <p className="mt-3 m-5 text-md text-orange-500 text-center">
          I am a frontend developer passionate about building modern, responsive
          websites using HTML, CSS, JavaScript, and React.
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl mb-5 sm:mb-7 text-center text-white font-bold tracking-wide" data-aos="zoom-in"data-aos-duration="2000">
        Education Qualification
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10" data-aos="zoom-in" data-aos-duration="2000">
        {education.map((data) => (
          <div
            key={data.id}
            className="shadow-md shadow-orange-500 bg-gray-800 border-2 border-orange-500 rounded-xl p-2 sm:py-8 sm:mt-5 hover:scale-105 transition-transform duration-300">
            <h1 className="text-xl text-white font-bold">{data.degree}</h1>
            <h2 className="text-lg text-orange-500 font-semibold">
              {data.college}
            </h2>
            <h3 className="text-sm text-orange-400 opacity-90">
              {data.univercity}
            </h3>
            <h3 className="text-sm text-orange-200 font-extrabold">
              {data.year}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
