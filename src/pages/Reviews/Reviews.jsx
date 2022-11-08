import React from "react";

const Reviews = ({ userReviews }) => {
  // console.log(userReviews);
  const { email, name, photo, ratings, review, _id } = userReviews;
  return (
    <div className="border border-black p-3 ">
      <div className="flex items-center">
        <img src={photo} className="w-10 h-10 rounded-full mr-3" alt="" />
        <h1>{name ? name : "No Name Found"}</h1>
      </div>
      <p className="text-center">{review}</p>
      <div className="flex items-center justify-center my-3 text-center">
        <p className="mr-3">Ratings:{ratings}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Reviews;
