import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setServices(data);
          });
    },[])

    return (
      <div>
        <h1 className="text-center text-5xl font-bold my-5 ">My Services</h1>
        <div className="grid md:grid-cols-2 gap-6 p-2">
          {services?.map((service) => (
            <ServicesCard service={service} key={service._id}></ServicesCard>
          ))}
        </div>
        <Link to='/allservices'>
          <div className="text-center  w-1/2 mx-auto border-black border text-uppercase py-2 my-3 cursor-pointer text-xl">
            See All
          </div>
        </Link>
      </div>
    );
};

export default Services;