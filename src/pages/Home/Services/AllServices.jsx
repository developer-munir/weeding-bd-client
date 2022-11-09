import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5 ">My All Services</h1>
      <div className="grid md:grid-cols-2 gap-6 p-2">
        {services?.map((service) => (
          <ServicesCard
            service={service}
            key={service._id}
          ></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
