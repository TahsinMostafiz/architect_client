import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewsCard from "./ReviewsCard";
import toast from "react-hot-toast";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? You want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
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
          <ReviewsCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
