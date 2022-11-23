import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import coverImg from "../../../assets/images/review/review-cover.jpg";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import contactImg from "../../../assets/images/coverpage/mesege.jpg";
import toast from "react-hot-toast";
import ReviewsSection from "./ReviewsSection";
import useTitle from "../../../Hooks/useTitle";

const ServiceDetails = () => {
  const { title, img, price, description, facility, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  useTitle("Service Details");

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const ratings = form.ratings.value;
    const message = form.message.value;
    const photoUrl =
      user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      ratings,
      message,
      photoUrl,
    };

    fetch("https://architect-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("architect-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          form.reset();
        }
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div className="py-10 px-5 md:px-0">
      <section className="container mx-auto">
        <img src={coverImg} alt="" className="w-full h-96 rounded-lg" />
      </section>
      <section className="bg-white text-gray-900 my-10">
        <div className="container mx-auto">
          <div>
            <div className="grid lg:gap-10 lg:grid-cols-2 lg:items-center">
              <div className="h-full w-full">
                <img
                  src={img}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg bg-gray-700 md:h-80 lg:h-full"
                />
              </div>
              <div className="pt-5">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">
                  {title}
                </h3>
                <p className="mt-3 text-lg text-gray-700">{description}</p>
                <div className="grid grid-cols-2 items-center w-full pr-2">
                  <p className="text-orange-600 text-xl font-semibold">
                    Price : ${price}
                  </p>
                  <ul className="flex ml-auto ">
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
                <div className="mt-12 space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-yellow-400 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        {facility[1].name}
                      </h4>
                      <p className="mt-2 text-gray-700">
                        {facility[1].details}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-yellow-400 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        {facility[0].name}
                      </h4>
                      <p className="mt-2 text-gray-700">
                        {facility[0].details}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-yellow-400 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 text-gray-900">
                        {facility[2].name}
                      </h4>
                      <p className="mt-2 text-gray-700">
                        {facility[2].details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <ReviewsSection></ReviewsSection>
      {/*Add Reviews Section */}
      <section>
        <div className="bg-white text-gray-800" id="contact">
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
            <div className="flex flex-col justify-between">
              <img src={contactImg} alt="" className="p-6 " />
            </div>
            <form
              onSubmit={handleReviews}
              className="space-y-3 ng-untouched ng-pristine ng-valid mt-4"
            >
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Add A Review
                </h2>
                <div className="text-gray-800">Send your feedback</div>
              </div>
              <div>
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full p-3 rounded border-2 border-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full p-3 rounded border-2 border-gray-800"
                  data-temp-mail-org="1"
                />
              </div>
              <div>
                <label htmlFor="ratings" className="text-sm">
                  Ratings{" "}
                  <span className="text-orange-600 font-semibold">
                    Out of 5
                  </span>
                </label>
                <input
                  id="ratings"
                  name="ratings"
                  type="text"
                  required
                  placeholder="4.8"
                  className="w-full p-3 rounded border-2 border-gray-800"
                  data-temp-mail-org="1"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  className="w-full p-3 rounded border-2 border-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-400 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
