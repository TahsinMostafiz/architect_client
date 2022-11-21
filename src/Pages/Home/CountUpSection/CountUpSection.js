import React from "react";
import background from "../../../assets/images/coverpage/cover_img_1.jpg";
import "./CountUpSection.css";
import { FaBuilding, FaUserSecret, FaSketch } from "react-icons/fa";
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <div
      className="flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "400px",
      }}
    >
      <div className="grid grid-cols-3 gap-4 w-full justify-items-center content-between ">
        <div className="w-20 h-20 rounded-full bg-yellow-400 relative">
          <FaBuilding className="text-5xl text-white absolute top-4 left-4"></FaBuilding>
          <CountUp
            className="text-white text-4xl font-semibold pt-24 pl-1 inline-block"
            end={1579}
            duration={2.75}
          />
          <p className="text-gray-300 text-base uppercase tracking-wider font-semibold">
            projects
          </p>
        </div>
        <div className="w-20 h-20 rounded-full bg-yellow-400 relative">
          <FaSketch className="text-5xl text-white absolute top-4 left-4"></FaSketch>
          <CountUp
            className="text-white text-4xl font-semibold pt-24 pl-1 inline-block"
            end={3131}
            duration={2.75}
          />
          <p className="text-gray-300 text-base uppercase tracking-wider font-semibold pl-3">
            deign
          </p>
        </div>
        <div className="w-20 h-20 rounded-full bg-yellow-400 relative">
          <FaUserSecret className="text-5xl text-white absolute top-4 left-4"></FaUserSecret>
          <CountUp
            className="text-white text-4xl font-semibold pt-24 pl-1 inline-block"
            end={2310}
            duration={2.75}
          />
          <p className="text-gray-300 text-base uppercase tracking-wider font-semibold pl-3">
            clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountUpSection;
