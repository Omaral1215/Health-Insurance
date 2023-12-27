import React from "react";

const Tsp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold my-5">
          OUR TOP SELLING POLICIES
        </div>
        <div className="font-bold my-1 text-4xl">
          Insurance Plans our Customers Highly Prefer
        </div>
        <div className="my-3">
          Our best Health Insurance Policies cater to your needs.
        </div>
        <div className="max-w-7xl">
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row ">
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fcomprehensive_8fe665c672.jpg&w=1920&q=75"
                alt="policy1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Caresure Comprehensive Insurance Policy
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Extensive healthcare protection for your family. Get maximum
                coverage at times of medical needs.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View Policy
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Caresure Health Premier Insurance Policy
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Cherish your 50's without worrying about your medical expenses.
                This policy's wide coverage ensures financial assistance to you
                and your family.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View Policy
              </button>
            </div>
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fhealth_premier_4c54c7fcc5.jpg&w=1920&q=75"
                alt="policy2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row">
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fhealth_assure_78a6ff08e9.jpg&w=1920&q=75"
                alt="policy3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Caresure Health Assure Insurance Policy
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Affordable health policy with vast benefits. Cover your entire
                family under a single roof.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View Policy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl"></div>
      </div>
    </>
  );
};

export default Tsp;
