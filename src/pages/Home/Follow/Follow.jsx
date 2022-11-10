import React from "react";
import w1 from "../../../assests/w-2.jpg";
import w2 from "../../../assests/w-7.jpg";
import w3 from "../../../assests/w-5.jpg";
import w4 from "../../../assests/w-6.jpg";
import w5 from "../../../assests/w1.jpg";
import w6 from "../../../assests/w5.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Follow = () => {
  return (
    <div>
      <div className="mt-20 text-center">
        <h1 className="md:text-5xl text-3xl">FOLLOW ME ON INSTAGRAM</h1>
        <small className="text-zinc-600 text-xl">@ Wedding Family BD</small>
      </div>
      <PhotoProvider>
        <div className="grid md:grid-cols-3 gap-4 mt-32 p-3">
          <div className="grid grid-cols-2 gap-4">
            <PhotoView src={w1}>
              <img
                className="w-[200px] cursor-pointer"
                data-aos="fade-right"
                src={w1}
                alt=""
              />
            </PhotoView>

            <PhotoView src={w2}>
              <img
                className="w-[200px] cursor-pointer  relative bottom-[50px]"
                src={w2}
                data-aos="fade-left"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoView src={w3}>
              <img
                className="w-[200px] cursor-pointer"
                data-aos="fade-right"
                src={w3}
                alt=""
              />
            </PhotoView>
            <PhotoView src={w4}>
              <img
                className="w-[200px] cursor-pointer relative bottom-[50px]"
                src={w4}
                data-aos="fade-left"
                alt=""
              />
            </PhotoView>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoView src={w5}>
              <img
                className="w-[200px] cursor-pointer"
                data-aos="fade-right"
                src={w5}
                alt=""
              />
            </PhotoView>

            <PhotoView src={w6}>
              <img
                className="w-[200px] cursor-pointer relative bottom-[50px]"
                src={w6}
                data-aos="fade-left"
                alt=""
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Follow;
