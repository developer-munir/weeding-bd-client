import React from 'react';
import './blogupdate.css';
import img1 from '../../assests/w-2.jpg';
import { PhotoProvider, PhotoView } from "react-photo-view";
const BlogUpdateCard = () => {
    return (
      <PhotoProvider>
        <div
          className="card rounded-none card-compact w-full shadow-xl"
          data-aos="fade-left"
        >
          <figure>
            <PhotoView src={img1}>
              <img src={img1} alt="Shoes" />
            </PhotoView>
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="text-2xl">10</h1>
                <span className="text-xl">Nov, 2022</span>
              </div>
              <span className="text-2xl">|</span>
              <div>
                <h1 className="text-xl">Travel</h1>
                <p className="text-zinc-600">
                  Your choice to be photograper is better
                </p>
              </div>
            </div>
          </div>
        </div>
      </PhotoProvider>
    );
};

export default BlogUpdateCard;