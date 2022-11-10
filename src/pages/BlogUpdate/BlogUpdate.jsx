import React from "react";
import { Link } from "react-router-dom";
import BlogUpdateCard from "./BlogUpdateCard";

const BlogUpdate = () => {
  return (
    <div className=" blogupdate-container my-20 p-2">
      <div className="border md:w-[300px] p-3 text-center shadow-xl">
        <h1 className="border-b-2 mb-5 text-3xl font-thin pb-2">
          Blog updated
        </h1>
        <p className="text-zinc-600">
          With over 15 years of experience, numerous workshops and features in
          top wedding publications.
        </p>
        <Link to='/blog'>
          <button className="border py-2 px-6 my-4 uppercase hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2]">
            Read The Blog
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-2">
        <BlogUpdateCard></BlogUpdateCard>
        <BlogUpdateCard></BlogUpdateCard>
      </div>
    </div>
  );
};

export default BlogUpdate;
