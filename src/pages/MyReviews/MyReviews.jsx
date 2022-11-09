import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Reviews from "../Reviews/Reviews";
import MyReviewsRow from "./MyReviewsRow";
import toast from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [usersReviews, setUsersReviews] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersReviews(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email]);
  const notify = () => toast("Deleted successfully");
  const deleteReview = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        if (data?.acknowledged > 0) {
          const remainingReviews = usersReviews?.filter(
            (rsv) => rsv._id !== id
          );
          setUsersReviews(remainingReviews);
          notify();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        <MyReviewsRow
          key={reviews._id}
          reviews={reviews}
          deleteReview={deleteReview}
        ></MyReviewsRow>
      ))}
    </div>
  );
};

export default MyReviews;
