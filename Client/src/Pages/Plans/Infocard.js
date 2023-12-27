import React from "react";

const Infocard = () => {
  return (
    <div>
      <section className="bg-white body-font rounded border shadow-lg overflow-hidden m-4 h-[300px] ">
        <div className="mt-20">
          <div className="font-md text-blue-600 font-bold text-center my-3">
            INSURANCE
          </div>
          <div className="font-md text-4xl font-bold text-center my-3">
            Health Insurance Catered for Everyone
          </div>
          <div className="font-md  font-medium text-center my-3 mx-[200px]">
            Spending for your health is not an expense but an investment. With
            ever-increasing health risks, Medical Insurance has become essential
            for everyone, irrespective of age. By keeping this in mind, we offer
            the best mediclaim plans to safeguard you and your family from
            financial troubles and help you never compromise on your health.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infocard;
