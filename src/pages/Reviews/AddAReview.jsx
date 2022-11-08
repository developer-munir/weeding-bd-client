import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import './reviews.css'
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const AddAReview = () => {
  const { user } = useContext(AuthContext);
  const [number, setNumber] = useState(1);

  const notify = () => toast("Cannot add review more than five star");
  const postReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const reviewUserInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      uid: user?.uid,
      review,
      ratings: number,
    };
    console.log(reviewUserInfo);
  };
  const ratingUser = () => {
    if (number === 5) {
      return notify();
    }
    setNumber(number + 1);
  };
  // reviews
  return (
    <div>
      <form className="text-center md:pr-3" onSubmit={postReview}>
        <div
          className="flex justify-between w-1/4 my-3 cursor-pointer"
          onClick={ratingUser}
        >
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
        <textarea
          className="textarea border border-black w-full"
          placeholder="Add review"
          name="review"
        ></textarea>
        <button
          type="submit"
          className="border border-black w-1/2 py-2 my-3 text-2xl uppercase font-bold"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddAReview;
