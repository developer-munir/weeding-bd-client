import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegWindowMinimize } from "react-icons/fa";

const MyReviewsRow = ({ reviews, deleteReview }) => {
  // console.log(reviews);
  const { email, name, photo, price, ratings, review, reviewImg, title, _id } =
    reviews;
  const [user, setUser] = useState(reviews);
  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(e.target);
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  // console.log(user);
  const textChange = (e) => {
    const review = e.target.name;
    const newReview = e.target.value;
    const updatedText = { ...user };
    updatedText[review] = newReview;
    setUser(updatedText);
    // console.log(review);
  };

  return (
    <div className="my-5">
      <form onSubmit={handleUpdate}>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Service Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Review
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" className="p-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <span
                          className="cursor-pointer"
                          onClick={() => deleteReview(_id)}
                        >
                          <FaRegWindowMinimize></FaRegWindowMinimize>
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {title}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      <textarea
                        type="textarea"
                        name="review"
                        onChange={textChange}
                        // placeholder={review}
                        defaultValue={review}
                        id=""
                      />
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {price}$
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <Link className="text-blue-600 dark:text-blue-500 hover:underline">
                        <button type="submit" onClick={handleUpdate}>
                          Update Review
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyReviewsRow;
