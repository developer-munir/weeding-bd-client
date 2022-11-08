import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../../context/ServicesProvider';

const ServiceDetails = () => {
    const { serviceId } = useContext(ServiceContext);
    // console.log(serviceId)
    useEffect(() => {
        fetch(`http://localhost:5000/servicedetails/${serviceId}`)
        .then(res => res.json())
            .then(data => {
            console.log(data)
            })
            .catch(error => {
                console.log(error);
        })
    },[serviceId])
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
};

export default ServiceDetails;