import React from 'react';

const AddAReview = () => {
    return (
      <div>
        <form className='text-center pr-3'>
          <textarea
            className="textarea border border-black w-full"
            placeholder="Add review"
                ></textarea>
                <button type="submit" className='border border-black w-1/2 py-2 my-3 text-2xl uppercase font-bold'>Add Review</button>
        </form>
      </div>
    );
};

export default AddAReview;