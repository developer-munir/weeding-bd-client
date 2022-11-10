import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "./reviews.css";
import toast from "react-hot-toast";
import { ServiceContext } from "../../context/ServicesProvider";

const AddAReview = () => {
  const { user } = useContext(AuthContext);
  const { serviceId } = useContext(ServiceContext);
  const post = () => toast("Post Successfully");
  const postReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const reviewUserInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      review,
      reviewImg: serviceId?.img,
      title: serviceId?.title,
      price: serviceId?.price,
    };
    fetch("https://assignment-11-server-tau.vercel.app/allposts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          post();
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-[400px]">
      <form className="text-center md:pr-3" onSubmit={postReview}>
        <div className="flex justify-between w-2/4 my-3 cursor-pointer">
          <input
            type="text"
            name="username"
            placeholder={user?.displayName}
            readOnly
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <textarea
          className="textarea border border-black w-full"
          placeholder="Add review"
          name="review"
        ></textarea>
        <button
          type="submit"
          className="hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2] w-1/2 py-2 my-3 text-2xl uppercase font-bold"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddAReview;
