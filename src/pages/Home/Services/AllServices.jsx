import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  useTitle("AllServices");
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("https://assignment-11-server-tau.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5 ">My All Services</h1>
      <div className="grid lg:grid-cols-2 gap-6 p-2">
        {services?.map((service) => (
          <ServicesCard service={service} key={service._id}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
