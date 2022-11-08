import React from "react";

const Reviews = ({  userReviews }) => {
  console.log(userReviews);
  const { email, name, photo, ratings, review, _id } = userReviews;
  return (
    <div className="border border-black p-3 ">
      <div className="flex items-center">
        <img src={photo} className="w-10 h-10 rounded-full mr-3" alt="" />
        <h1>{name? name:'No Name Found'}</h1>
      </div>
      <div className="flex items-center my-3">
        <p className="mr-3">Ratings:{ratings}</p>
      </div>
      <p>
        {review}
      </p>
      <p>{email}</p>
    </div>
  );
};

export default Reviews;
