import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ service }) => {
  const { title, price, img, _id, description } = service;
  return (
    <div className="card  bg-base-100 border">
      <figure className="px-5 pt-5">
        {/* <img src={img} alt="Shoes" className="rounded-xl h-60" /> */}
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl h-60" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body py-5">
        <h2 className="card-title font-bold text-2xl">{title}</h2>

        <p>
          {description.length > 100 ? description.slice(0, 100) : description}
        </p>
        <div className="flex content-between">
          <p className="text-yellow-600 text-xl font-semibold">
            Price : ${price}
          </p>
          <ul className="flex">
            <li>
              <FaStar className="text-yellow-400"></FaStar>
            </li>
            <li>
              <FaStar className="text-yellow-400 ml-1"></FaStar>
            </li>
            <li>
              <FaStar className="text-yellow-400 ml-1"></FaStar>
            </li>
            <li>
              <FaStar className="text-yellow-400 ml-1"></FaStar>
            </li>
            <li>
              <FaStarHalf className="text-yellow-400 ml-1"></FaStarHalf>
            </li>
          </ul>
        </div>

        <div className="card-actions">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-warning text-white">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
