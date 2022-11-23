import React from "react";
import contactImg from "../../../assets/images/coverpage/mesege.jpg";

import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const id = form.id.value;
    const title = form.title.value;
    const img = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const facility = [
      {
        name: "Fast Delivery",
        details:
          "Time is money, money is time, the faster we deliver the more you make.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Happiness is a by-product of an effort to make someone else happy.",
      },
      {
        name: "Money Back Guarantee",
        details:
          "If you are not satisfied of your desire please raise a return request",
      },
    ];

    const service = {
      service_id: id,
      title,
      img,
      price,
      description,
      ratings,
      facility,
    };

    fetch("https://architect-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("architect-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Added successfully");
          form.reset();
        }
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div>
      {/*Add Reviews Section */}
      <section className="container max-auto">
        <div className="bg-white text-gray-800" id="contact">
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
            <div className="flex flex-col justify-between">
              <img src={contactImg} alt="" className="p-6 " />
            </div>
            <form
              onSubmit={handleAddService}
              className="space-y-3 ng-untouched ng-pristine ng-valid mt-4"
            >
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Add A Service
                </h2>
              </div>
              <div>
                <label htmlFor="id" className="text-sm">
                  Service Id
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  placeholder="Service name"
                  required
                  className="w-full p-3 rounded border-2 border-gray-800"
                />
              </div>
              <div>
                <label htmlFor="title" className="text-sm">
                  Service name
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Service name"
                  required
                  className="w-full p-3 rounded border-2 border-gray-800"
                />
              </div>
              <div>
                <label htmlFor="imgUrl" className="text-sm">
                  Image Url
                </label>
                <input
                  id="imgUrl"
                  name="imgUrl"
                  type="url"
                  placeholder="Image Url"
                  className="w-full p-3 rounded border-2 border-gray-800"
                  data-temp-mail-org="1"
                />
              </div>
              <div className="flex gap-2">
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
                  <label htmlFor="price" className="text-sm">
                    Add Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="text"
                    required
                    placeholder="Price"
                    className="w-full p-3 rounded border-2 border-gray-800"
                    data-temp-mail-org="1"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
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

export default AddService;
