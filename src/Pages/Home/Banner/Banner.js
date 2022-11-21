import React from "react";
import img1 from "../../../assets/images/slider/slider-1.jpg";
import img2 from "../../../assets/images/slider/slider-2.jpg";
import img3 from "../../../assets/images/slider/slider-3.jpeg";
import BannerItems from "../BannerItems/BannerItems";

const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerItems key={slide.id} slide={slide}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
