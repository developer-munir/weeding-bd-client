import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddAReview from "../../Reviews/AddAReview";
import Reviews from "../../Reviews/Reviews";
import './servicedetails.css'

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { img, description, price, service_id, ratings, title, _id } =
    serviceDetails;
  return (
    <div className=" my-10 details-container">
      <div>
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
        <div className="grid md:grid-cols-2 gap-4 p-5 my-10">
          <div>
            <Link>
              <h1 className="text-center text-2xl my-3 md:mr-3 border border-black px-10 py-2">
                Add A Review
              </h1>
            </Link>
            <AddAReview>
            </AddAReview>
          </div>
          <div>
            <Link>
              <h1 className="text-center text-2xl my-3 border border-black px-10 py-2">
                All Reviews
              </h1>
            </Link>

            <Reviews></Reviews>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
