import React from "react";


const Banner = () => {

  return (
    <div className="relative h-[300px] py-24 px-10 mb-10">
      <img
        className="absolute top-0 right-0 h-full w-1/2 object-cover"
        src="https://img.freepik.com/premium-photo/collage-families-surfing-their-laptop_13339-256450.jpg?w=900"
        alt="Banner"
      />
      <div className="relative md:w-1/2 pl-[200px]">
        <p className="text-3xl font-bold">Still Waiting for the Right Plan?</p>
        <p className="text-2xl mb-10 leading-none">
          Our best Insurance Policy is just a click away!
        </p>
        <a
          href="/plans"
          className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-purple-700 hover:text-white-800"
        >
          View Policy &gt;
        </a>
      </div>
    </div>
  );
};

export default Banner;
