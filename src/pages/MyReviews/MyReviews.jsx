import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [usersReviews, setUsersReviews] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res =>res.json())
            .then(data => {
                setUsersReviews(data);
                console.log(data);
            })
            .catch(error => {
            console.error(error)
        })
    },[user?.email])
    return (
        <div>
            <h1 className='text-5xl uppercase text-center'>My reviews : {usersReviews?.length}</h1>
        </div>
    );
};

export default MyReviews;