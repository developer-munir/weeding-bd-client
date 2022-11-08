import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../assests/header2.jpg';
const Header = () => {
    return (
      <div className=" md:w-1/2 mx-auto text-center p-5 mb-5">
        <img
          src={headerImg}
          alt=""
          className="rounded-full w-[200px] h-[200px] mx-auto"
        />
        <h1 className="text-5xl py-3">YOU JUST ENJOY YOUR DAY!</h1>
        <p className="py-3 mb-3  text-slate-500">
          Reading one line that encapsulates our love for photography and art is
          powerful and often reminds us of the importance of documenting moments
          with my cameras.
        </p>
        <Link to='/services'>
          <span className="border border-black py-3 px-20 uppercase font-semibold  cursor-pointer hover:bg-slate-300">
            Get In Touch
          </span>
        </Link>
      </div>
    );
};

export default Header;