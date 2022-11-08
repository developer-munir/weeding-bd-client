import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import AddAReview from "../../Reviews/AddAReview";
import Reviews from "../../Reviews/Reviews";
import "./servicedetails.css";
import { FaSadTear } from "react-icons/fa";
const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const [reviews, setReviews] = useState();
  const { user } = useContext(AuthContext);
  const { img, description, price, ratings, title } =
    serviceDetails;
  useEffect(() => {
    fetch("http://localhost:5000/allposts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, []);

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
            <div className="card-actions flex items-center justify-between">
              <span>Price : {price}$</span>
              <span>Ratings : {ratings}</span>

              <Link
                to="/"
                className="border px-3 py-2 text-center border-black cursor-pointer hover:bg-slate-300 uppercase"
              >
                Back to services
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-5xl text-center my-10">See Reviews And Ratings</h1>
        <div className="grid md:grid-cols-2 gap-4 p-5 my-10">
          <div>
            <Link>
              <h1 className="text-center text-2xl my-3 md:mr-3 border border-black px-10 py-2">
                Add A Review
              </h1>
            </Link>
            {user?.uid ? (
              <AddAReview></AddAReview>
            ) : (
              <div className=" text-center ">
                <p className="text-3xl font-bold my-5">
                  Please Log in first to add a review
                </p>
                <FaSadTear size={100} className="block m-auto mb-5"></FaSadTear>
                <Link className="link link-primary" to='/login'>login now</Link>
              </div>
            )}
          </div>
          <div>
            <Link>
              <h1 className="text-center text-2xl my-3 border border-black px-10 py-2">
                All Reviews
              </h1>
            </Link>
            {reviews?.map((userReviews) => (
              <Reviews
                key={userReviews._id}
                userReviews={userReviews}
              ></Reviews>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
