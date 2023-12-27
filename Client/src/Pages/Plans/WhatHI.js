import React from 'react'

const WhatHI = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src="https://img.freepik.com/premium-photo/happy-young-family-bonding-together-home_425904-4579.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="font-md text-blue-600 font-bold text-center my-3">
              HEALTH INSURANCE
            </div>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
              What is Health Insurance?
            </h1>
            <p className="mb-5 leading-relaxed">
              Health Insurance is a shield that protects you and your family
              from financial instability during health emergencies. Against the
              common misconception that Medical Insurance is only for the
              elderly or people with health risks, its necessity is
              indispensable for everyone. A Health Insurance plan offers peace
              of mind in times of hospitalisation by taking care of your medical
              bills.
            </p>
            <p className="mb-8 leading-relaxed">
              Uncertainties like COVID-19 have taught us the necessity of
              Medical Insurance. On the other hand, with the continuous spike in
              medical inflation, a Health Insurance plan can save your day
              either by providing cashless treatments or reimbursements on the
              incurred medical expenses. The flexibility of our Health Insurance
              is as such it can be availed either on an Individual or Floater
              basis to get wide coverage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatHI