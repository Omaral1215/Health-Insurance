import React, { useEffect, useState } from "react";

const Form = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/front-view-beautiful-blonde-woman_23-2148471029.jpg?w=360&t=st=1690552524~exp=1690553124~hmac=3a6bbb56c03a814dcd239b191cfb2f97aa245dce5837f70b2df249477d84990f",
    "https://img.freepik.com/free-photo/family-home_23-2148166876.jpg?w=360&t=st=1690552628~exp=1690553228~hmac=d8c8cf77695483972a612a82262ef51d6ddc09017689ebf82869c6995d83c277",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39386.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39379.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais",
    "https://img.freepik.com/free-vector/health-insurance-template-vector-poster_53876-111250.jpg?w=360&t=st=1690560649~exp=1690561249~hmac=08cb087baba232430a6a3a093e2594774075b44bfea903ad4527bf1a3c9dec57",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data as an array to the console
    console.log("formData: ", [policyNumber, selectedDate, mobileNumber]);

    // Clearing the input fields after submission
    setPolicyNumber("");
    setSelectedDate("");
    setMobileNumber("");
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center my-12 shadow-2xl">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex bg-white">
            <div className="w-full h-[700px] bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`object-cover object-center rounded h-full ${
                    index === currentImageIndex ? "block" : "hidden"
                  }`}
                  alt="hero"
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                />
              ))}
            </div>
            <div className="w-full lg:w-7/12 bg-white p-5 mt-20 rounded-lg h-[620px] lg:rounded-l-none">
              <h3 className="pt-4 text-3xl font-semibold text-center">
                Health Insurance Renewal
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="policyNumber"
                  >
                    Policy Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="policyNumber"
                    type="text"
                    placeholder="Enter your policy number"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                  <p className="text-xs text-gray-600">
                    Policy format like P/000000/00/0000/000000 or 112202000000
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="mobileNumber"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
