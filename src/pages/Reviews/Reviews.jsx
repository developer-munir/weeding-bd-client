import React from "react";

const Reviews = ({ userReviews }) => {
  const { email, name, photo, review, _id, username } = userReviews;
  return (
    <div className="border border-black p-3 ">
      <div className="flex items-center">
        <img
          src={photo}
          className="w-10 h-10 rounded-full mr-3 border border-black"
          alt=""
        />
        <h1>{name ? name : username}</h1>
      </div>
      <p className="text-center">{review}</p>
      <div className="flex items-center justify-center my-3 text-center">
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Reviews;
