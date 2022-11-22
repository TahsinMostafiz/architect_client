import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <div className="text-center">
          <p className="text-4xl text-yellow-400 font-bold my-5">My Services</p>
          <p className="py-6 text-base">
            We offer a fully integrated service that complements the
            architectural concept, we ensure all projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
        <div className="text-center py-10">
          <Link to="/services">
            <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-white">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
