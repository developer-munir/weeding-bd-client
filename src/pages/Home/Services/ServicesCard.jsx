import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ServiceContext } from '../../../context/ServicesProvider';


const ServicesCard = ({ service }) => {
  const { detailsService } = useContext(ServiceContext);
    const { description, img, price, ratings, _id, title } = service;
  return (
    <PhotoProvider>
      <div className="card card-side bg-base-100 shadow-xl rounded-none grid md:grid-cols-2">
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="wedding" className="md:w-[400px] h-full" />
          </PhotoView>
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

            <Link
              to={`services/${_id}`}
              className="w-full"
              onClick={() => detailsService(service)}
            >
              <div className="border px-3 py-1 w-full text-center border-black cursor-pointer hover:bg-slate-300">
                Details
              </div>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServicesCard;