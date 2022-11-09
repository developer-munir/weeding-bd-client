import React from "react";

const AddToService = () => {
  return (
    <div>
      <h1 className="text-center text-3xl my-5">Add To Service</h1>
          <form className="grid md:grid-cols-2 md:w-1/2 mx-auto gap-5 p-4 border shadow-xl rounded-md " >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What is service name</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Banner image url</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="img"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Add Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="price"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            type="number"
            name="ratings"
            placeholder="ratings"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Descriptions</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            className="input input-bordered w-full "
            required
          />
        </div>
        <div className="form-control w-full">
          <button type="submit" className="border border-black  mt-10 py-2 uppercase font-bold hover:bg-slate-600 hover:text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddToService;
