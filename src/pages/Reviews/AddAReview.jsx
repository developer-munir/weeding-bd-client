import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddAReview = () => {
  const { user } = useContext(AuthContext);

  const postReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const reviewUserInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      uid: user?.uid,
      review,
    };
    console.log(reviewUserInfo);
  };
  return (
    <div>
      <form className="text-center md:pr-3" onSubmit={postReview}>
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
