import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-overlay w-full">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 md:left-1/4 lg:left-1/3 top-72">
        <p className="text-base lg:text-xl font-bold text-gray-300 uppercase md:tracking-wide lg:tracking-widest">
          Providing all kinds of interior, exterior design.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 md:left-1/4 lg:left-1/3 top-2/4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white capitalize">
          Dream home might be <br /> closer than you think
        </h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
