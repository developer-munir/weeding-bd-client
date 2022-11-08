import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Reviews from "../Reviews/Reviews";
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [usersReviews, setUsersReviews] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersReviews(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email]);
  return (
    <div>
      {usersReviews ? (
        <h1 className="text-5xl uppercase text-center">My reviews</h1>
      ) : (
        <h1 className="text-5xl uppercase text-center">
          No reviews were added
        </h1>
      )}
      {usersReviews?.map((reviews) => (
        <MyReviewsRow key={reviews._id} reviews={reviews}></MyReviewsRow>
      ))}
    </div>
  );
};

export default MyReviews;
