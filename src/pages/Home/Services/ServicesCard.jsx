import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ServiceContext } from '../../../context/ServicesProvider';


const ServicesCard = ({ service }) => {
  const { detailsService } = useContext(ServiceContext);
  const { description, img, price, ratings, _id, title } = service;
  // console.log(service)
  return (
    <PhotoProvider>
      <div
        className="card card-side bg-base-100 shadow-xl rounded-none grid md:grid-cols-2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="wedding" className="md:w-[400px] h-full" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='from-accent-content text-blue-300'>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="card-actions font-bold">
            <span>Price : {price}$</span>
            <span>Ratings : {ratings}</span>

            <Link
              to={`/services/${_id}`}
              className="w-full"
              onClick={() => detailsService(service)}
            >
              <div className="border px-3 py-1 w-full text-center shadow-xl hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2]">
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