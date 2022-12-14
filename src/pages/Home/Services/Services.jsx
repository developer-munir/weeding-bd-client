import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("https://assignment-11-server-tau.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5 ">My Services</h1>
      <div className="grid lg:grid-cols-2 gap-6 p-2">
        {services?.map((service) => (
          <ServicesCard service={service} key={service._id}></ServicesCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/allservices">
          <button className="text-center  w-1/2  shadow-xl hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2] border text-uppercase py-2 my-3 cursor-pointer text-xl">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
