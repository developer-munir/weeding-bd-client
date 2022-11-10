import React from "react";
const Reviews = ({ userReviews }) => {
  const { email, name, photo, review, _id, username } = userReviews;
  return (
    <div className="border border-black p-3 shadow-xl">
      <div className="flex items-center">
        <img
          src={photo}
          className="w-10 h-10 rounded-full mr-3 border-2 border-red-600 "
          alt=""
        />
        <h1 className="text-red-600 font-bold">{name ? name : username}</h1>
      </div>
      <small className="text-stone-500">{review}</small>
    </div>
  );
};

export default Reviews;
