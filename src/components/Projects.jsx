import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="text-center m-5 sm:mt-20 sm:mb-14 sm:h-fit scroll-mt-20">
      <h1 className="text-3xl mb-14 sm:text-5xl text-white font-bold tracking-wide" data-aos="zoom-in" data-aos-duration="2000">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:mx-5 mt-6" data-aos="zoom-in" data-aos-duration="2000">
        {projects.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center p-2 mx-6 shadow-md shadow-orange-500 bg-gray-800 border-2 border-orange-500 rounded-xl sm:py-4 sm:mt-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-[70%] object-cover flex items-center justify-center shadow-sm shadow-orange-100">
              <img
                src={data.image}
                alt={data.title}
                className=" h-auto object-cover"
              />
            </div>

            <div className="mt-2 text-center">
              <h1 className="text-xl font-bold text-orange-600">{data.title}{" ("} <span className="text-sm text-white ">{data.language}</span> {" )"}</h1>
             
              <p className="text-sm font-medium text-gray-200">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
