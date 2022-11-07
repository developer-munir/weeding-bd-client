import React from 'react';

const ServicesCard = ({service}) => {
    const { description, img, price, ratings, _id, title } = service;
    return (
      <div className="card card-side bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={img} alt="wedding" className='md:w-[400px] h-full' />
        </figure>
        <div className="card-body">
                <h2 className="card-title">{title}!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;