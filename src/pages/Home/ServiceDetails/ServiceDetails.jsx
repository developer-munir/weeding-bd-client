import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../../Reviews/AddReviews";
import Reviews from "../../Reviews/Reviews";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { img, description, price, service_id, ratings, title, _id } =
    serviceDetails;
  return (
    <div className="grid grid-cols-2 my-10">
      <div className="bg-red-300">
        <AddReviews></AddReviews>
      </div>
      <div className="bg-blue-300">
        <div className="card card-side bg-base-100 shadow-xl rounded-none grid">
          <figure>
            <img src={img} alt="wedding" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}!</h2>
            <p>{description}</p>
            <div className="card-actions">
              <span>Price : {price}$</span>
              <span>Ratings : {ratings}</span>

              <div className="border px-3 py-1 w-full text-center border-black cursor-pointer hover:bg-slate-300">
                <Link>See Reviews And Ratings</Link>
              </div>
            </div>
          </div>
        </div>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;
