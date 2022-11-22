import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";
import toast from "react-hot-toast";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByUser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

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
            const remaining = myReviews.filter((review) => review._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-5">
        {myReviews.map((myReview) => (
          <MyReviewsCard
            key={myReview._id}
            myReview={myReview}
            handleDelete={handleDelete}
          ></MyReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
