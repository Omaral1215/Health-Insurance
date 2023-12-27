import React from "react";

const Review = () => {
  return (
    <section className="bg-white body-font rounded border shadow-lg overflow-hidden m-4 ">
      <div className="font-md text-blue-600 font-bold text-center my-3">
        OUR CUSTOMERS
      </div>
      <div className="font-md text-4xl font-bold text-center my-3">
        Happily Insured! with Caresure Health
      </div>
      <div className="font-md  font-medium text-center my-3">
        We find rewards through the words of our customers.
      </div>
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center rounded-sm">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-[50%] ms-[150px] w-[300px] h-[300px]"
            alt="hero"
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1060&t=st=1688997806~exp=1688998406~hmac=daaa96048b54b94727b85ca169c5d319125a00695ed52a54eac55163132e0b0a"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <span className="mb-8 leading-relaxed text-lg">
            I have been with Caresure Health Insurance for the past 8 years, and
            have applied for two claims in that time. Both claims got settled,
            and I received good support from the company during my
            hospitalisation.
          </span>
          <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900">
            Jinal Shah
          </h1>
          <p className="text-md mt-2 text-gray-500 mb-8 w-full font-bold">
            Bangalore
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <button className="inline-flex text-white bg-[#EE744D] border-0 py-2 px-6 focus:outline-none hover:bg-[#EE744D] rounded text-lg">
              Get Insured
            </button>
          </div>

          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
