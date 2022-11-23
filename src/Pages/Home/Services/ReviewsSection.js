import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewsCard from "./ReviewsCard";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://architect-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex items-center w-full my-4">
        <p className="text-gray-900 text-3xl font-bold">
          {reviews.length} Reviews
        </p>
        <ul className="flex">
          <li>
            <FaStar className="text-yellow-500 ml-1 text-xl"></FaStar>
          </li>
          <li>
            <FaStar className="text-yellow-500 ml-1 text-xl"></FaStar>
          </li>
          <li>
            <FaStar className="text-yellow-500 ml-1 text-xl"></FaStar>
          </li>
          <li>
            <FaStar className="text-yellow-500 ml-1 text-xl"></FaStar>
          </li>
          <li>
            <FaStar className="text-yellow-500 ml-1 text-xl"></FaStar>
          </li>
        </ul>
        <p className="text-yellow-500 text-xl font-bold ml-1">5</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewsCard key={review._id} review={review}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
