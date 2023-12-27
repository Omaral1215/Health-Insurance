import React from "react";

const Cim = () => {
  return (
    <div className="bg-white py-12">
      <h1 className="text-center text-indigo-600 font-bold my-3">
        CLAIMS IN NUMBERS
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                fill="orange"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  font-weight="bold"
                />
              </svg>

              <div className="text-3xl font-bold text-indigo-600">
                75 Lakh +
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-sm font-light text-black">
                Claims settled since inception
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                fill="orange"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  font-weight="bold"
                />
              </svg>

              <div className="text-3xl font-bold text-indigo-600">
                4 Crore +
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-sm font-light text-black">
                Rupees claims settled every hour
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                fill="orange"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  font-weight="bold"
                />
              </svg>

              <div className="text-3xl font-bold text-indigo-600">
                5000 + Claims
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="text-sm font-light text-black">
                Getting settled every day on an average
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cim;
