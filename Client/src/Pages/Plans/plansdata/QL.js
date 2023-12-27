import React from 'react'

const QL = () => {
  return (
    <div>
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/3 md:pr-5 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2 text-gray-900">
            Quick Links
          </h1>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <nav className="flex flex-wrap list-disc ">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Plan Essentials
              </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Why Choose Caresure?
              </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Looking for something else?
              </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Understand whats included
              </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Insured with Caresure
              </a>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Be Assured of the Best
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default QL