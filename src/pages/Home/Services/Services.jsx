import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setServices(data);
          });
    },[])

    return (
        <div className='grid md:grid-cols-2 gap-6 p-2'>
            {
                services?.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
            }
        </div>
    );
};

export default Services;