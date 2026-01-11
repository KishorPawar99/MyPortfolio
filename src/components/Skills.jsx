import React from "react";
import skills from "./data/skills.json";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

const Skills = () => {
  return (
    <section id="skills" className="text-center sm:h-scrren scroll-mt-20">
      <h1 className="text-3xl sm:text-5xl text-white font-bold tracking-wide sm:my-14" data-aos="zoom-in" data-aos-duration="2000">
        Skills
      </h1>
      <div className="" data-aos="zoom-in" data-aos-duration="2000">
        {skills.map((data) => {
          let Icon = null;

          if (data.pack === "fa") {
            Icon = FaIcons[data.icon];
          } else if (data.pack === "ri") {
            Icon = RiIcons[data.icon];
          }

          return (
            <div key={data.id} className="m-5 mx-10 sm:mx-30">
              <div className="w-full pb-2 sm:mb-12">
                <div className="flex justify-between items-center m-3 ">
                  <div className="flex items-center justify-center gap-5 mb-1">
                    {Icon && <Icon className="text-orange-500 text-2xl" />}
                    <span className="font-medium text-white">{data.name}</span>
                  </div>

                  <div className="text-sm mb-1 text-white">
                    <span>{data.level}%</span>
                  </div>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-orange-500 h-2 rounded transition-all duration-700"
                    style={{ width: `${data.level}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
