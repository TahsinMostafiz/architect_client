import React from "react";
import contactImg from "../../../assets/images/coverpage/mesege.jpg";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800" id="contact">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
        <div className="flex flex-col justify-between">
          <img src={contactImg} alt="" className="p-6 " />
        </div>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid mt-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-gray-800">Send your message</div>
          </div>
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border-2 border-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
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
  );
};

export default Contact;
