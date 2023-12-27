import React from 'react'

const GetStarted = () => {
  return (
    <div>
      <div className="container px-5 mt-10 mb-20 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div className="text-blue-600 font-bold my-3">GET STARTED</div>
            <div className="font-bold my-1 text-5xl">
              Be Assured of the Best
            </div>
            <div className="font-semibold my-1 text-md">
              Get your future secured with us.
            </div>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-[400px] overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://img.freepik.com/premium-photo/beautiful-young-businesswoman-is-holding-tablet-her-hands-against-urban-city-background_360066-7866.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais"
              />
            </div>
            <h2 className="title-font text-4xl font-medium text-gray-900 mt-6 mb-3">
              Ready to get your policy?
            </h2>
            <button className="inline-flex items-center justify-center px-4 py-2 text-md font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-orange-300 focus:outline-none focus:ring h-10 w-32 mt-7">
              Get Insured
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-[400px] overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://img.freepik.com/free-photo/colleagues-working-together-call-center-with-headphones_23-2149256084.jpg?size=626&ext=jpg&ga=GA1.1"
              />
            </div>
            <h2 className="title-font text-4xl font-medium text-gray-900 mt-6 mb-3">
              Want more information?
            </h2>
            <button className="inline-flex items-center justify-center px-4 py-2 text-md font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-orange-300 focus:outline-none focus:ring h-10 w-32 mt-7">
              Get a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted