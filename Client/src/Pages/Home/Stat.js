import React, { useEffect, useState,useRef } from "react";

const Stat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [files, setFiles] = useState(0);
  const [places, setPlaces] = useState(0);

  const statRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = statRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setDownloads((prevDownloads) => {
          const newDownloads = prevDownloads + 10;
          return newDownloads >= 2700 ? 2700 : newDownloads;
        });

        setUsers((prevUsers) => {
          const newUsers = prevUsers + 5;
          return newUsers >= 1300 ? 1300 : newUsers;
        });

        setFiles((prevFiles) => {
          const newFiles = prevFiles + 1;
          return newFiles >= 4 ? 4 : newFiles;
        });

        setPlaces((prevPlaces) => {
          const newPlaces = prevPlaces + 1;
          return newPlaces >= 90 ? 90 : newPlaces;
        });
      }, 0);
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={statRef}>
      <section className="text-gray-600 body-font bg-gray-50 ">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h5 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600">
              Why Caresure Health ?
            </h5>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 bg-[#FFFFFF] px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {downloads} K
                </h2>
                <p className="leading-relaxed">Lives covered since inception</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {users} +
                </h2>
                <p className="leading-relaxed">
                  Network Hospitals across India
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <span className="text-indigo-500 w-12 h-11 mb-3 inline-block">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                    />
                  </svg>
                </span>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {files} Rating
                </h2>
                <p className="leading-relaxed">Based on 8050 User reviews</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {places} %
                </h2>
                <p className="leading-relaxed">
                  Cashless claims settled in 1 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
