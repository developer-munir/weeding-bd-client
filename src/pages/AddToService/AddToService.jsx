import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddToService = () => {
  useTitle('Add Service')
  const notify = () => toast('Service Added Successfully');
  const handleAddToService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.img.value;
    const ratings = form.ratings.value;
    const description = form.description.value;
    const addToService = {
      title: title,
      price: price,
      img: img,
      ratings: ratings,
      description: description,
    };
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notify();
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1 className="text-center text-3xl my-5">Add To Service</h1>
      <form
        className="grid md:grid-cols-2 md:w-1/2 mx-auto gap-5 p-4 border shadow-2xl rounded-md "
        onSubmit={handleAddToService}
      >
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
          <button
            type="submit"
            className="border   mt-10 py-2 uppercase font-bold hover:text-red-500 bg-[#0D0D0D] text-[#CAD5E2] "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToService;
