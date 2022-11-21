import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../assets/images/coverpage/about.jpg";
const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h2 className="text-xl font-bold text-yellow-400">Why Me</h2>
          <h2 className="text-3xl font-bold ">
            Creating place that enhance the human experience.
          </h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Hi! I'm Tahsin Mostafiz And I'm the best Arhitect and professional
            Interior designer Outta here, I can make your home or place look
            very cohesive, I will create a 3D Design of your dream home
            according to your needs.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="#contact"
              className="px-8 py-3 text-lg font-semibold rounded bg-yellow-400 text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 relative">
          <img src={aboutImg} alt="" className="object-contain " />
          <div className="w-32 h-36 border-8 border-yellow-400 absolute top-20 -left-12"></div>
          <h2 className="text-gray-800 font-bold absolute top-20 -left-5">
            <span className="text-9xl">5</span> <br />{" "}
            <span className="uppercase text-2xl mt-5 inline-block">
              years of experience
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
