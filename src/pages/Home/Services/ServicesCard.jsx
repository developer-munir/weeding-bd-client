import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../../context/ServicesProvider';

const ServicesCard = ({ service }) => {
    const { description, img, price, ratings, _id, title } = service;
    const { detailsService } = useContext(ServiceContext);
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-none grid md:grid-cols-2">
      <figure>
        <img src={img} alt="wedding" className="w-[400px] h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions">
          <span>Price : {price}$</span>
          <span>Ratings : {ratings}</span>

          <div className="border px-3 py-1 w-full text-center border-black cursor-pointer hover:bg-slate-300">
            <Link
              to={`servicedetails/${_id}`}
              onClick={() => detailsService(_id)}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;