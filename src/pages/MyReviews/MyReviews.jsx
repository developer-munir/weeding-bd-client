import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle('MyReviews')
  const { user } = useContext(AuthContext);
  const [usersReviews, setUsersReviews] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          alert('invalid user')
        }
        return res.json()
      })
      .then((data) => {
        setUsersReviews(data);
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
        if (data?.acknowledged > 0) {
          const cheaking = window.confirm("Are your sure to delete this?");
          if (cheaking) {
            const remainingReviews = usersReviews?.filter(
              (rsv) => rsv._id !== id
            );
            setUsersReviews(remainingReviews);
            notify();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {usersReviews?.length === 0 ? (
        <h1 className="text-5xl uppercase text-center">
          No reviews were added
        </h1>
      ) : (
        <h1 className="text-5xl uppercase text-center">My reviews</h1>
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
