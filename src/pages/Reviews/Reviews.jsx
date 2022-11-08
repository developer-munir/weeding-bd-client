import React from "react";
import img from "../../assests/header3.jpg";

const Reviews = () => {
  return (
    <div className="border border-black p-3 ">
      <div className="flex items-center">
        <img src={img} className="w-10 h-10 rounded-full mr-3" alt="" />
        <h1>Munir Hossain Juwel</h1>
      </div>
      <div className="flex items-center my-3">
        <p className="mr-3">Ratings:5</p>
        <h1>1//2/2022</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatum ducimus ullam quod dolor! Rerum tenetur numquam voluptatem
        voluptatibus in.
      </p>
    </div>
  );
};

export default Reviews;
