import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { img } = serviceDetails;
    
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl rounded-none grid md:grid-cols-2">
          <figure>
            <img src={img} alt="wedding" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{}!</h2>
            <p>
              
            </p>
            <div className="card-actions">
              <span>Price : {}$</span>
              <span>Ratings : {}</span>

              <div className="border px-3 py-1 w-full text-center border-black cursor-pointer hover:bg-slate-300">
                <Link
                  
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;