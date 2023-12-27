import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-auto bg-[#E0E0E0] py-24 px-10 mb-10"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor_1258-91720.jpg?w=1380&t=st=1688649240~exp=1688649840~hmac=1274e32afb4bd6e84c20585aba3583257d64baaab5f182a1efed59f5f8aefe44")',
          backgroundSize: "70% 120%",
          backgroundPosition: "center top",
          height: "400px",
        }}
      >
        <div className="md:w-1/2 pl-[250px]">
          <p className="text-3xl font-bold">
            Still Waiting for the Right Plan?
          </p>
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
    </div>
  );
};

export default Banner;
