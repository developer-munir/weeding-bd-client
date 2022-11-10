import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import "./table.css";
import toast from "react-hot-toast";
const MyReviewsRow = ({ reviews, deleteReview }) => {
  const { review, title, _id } = reviews;
  const [user, setUser] = useState(reviews);

  const notify = () => toast("Update Successfully");
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          notify();
        } 
      })
      .catch((error) => console.log(error));
  };
  const textChange = (e) => {
    const review = e.target.name;
    const newReview = e.target.value;
    const updatedText = { ...user };
    updatedText[review] = newReview;
    setUser(updatedText);
  };

  return (
    <div className="my-5">
      <form onSubmit={handleUpdate}>
        <input type="checkbox" id={_id} className="modal-toggle" />
        <label htmlFor={_id} className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Update your review</h3>
            <p className="py-4 flex items-center justify-between">
              <textarea
                type="textarea"
                name="review"
                onChange={textChange}
                defaultValue={review}
                id=""
                className="border border-[#0D0D0D] p-2"
              />
              <button
                type="submit"
                className="hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2] p-2 rounded-md"
                onClick={handleUpdate}
              >
                Update Review
              </button>
            </p>
          </label>
        </label>

        <table className="shadow-xl">
          <tr className="grid grid-cols-3">
            <th>Review</th>
            <th>Service Name</th>
            <th>Update Review</th>
          </tr>
          <tr className="grid md:grid-cols-3">
            <td className="flex">
              <span onClick={() => deleteReview(_id)} className="cursor-pointer">
                <AiOutlineDelete></AiOutlineDelete>
              </span>
              <span className="ml-3">{user?.review}</span>
            </td>
            <td>{title}</td>
            <td className="flex items-center">
              <span>
                <label htmlFor={_id} className="cursor-pointer">
                  <FaEdit></FaEdit>
                </label>
              </span>
              <span className="ml-3">Update Review</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default MyReviewsRow;
