import React, { useState, useEffect, useMemo } from "react";

const OnlineBenefit = () => {
  // Data for all the cards
  const allCards = useMemo(
    () => [
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/businessman-balancing-plus-minus-business_48369-1399.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Easy to Compare",
        text: "People have varying needs. You can compare the benefits of various HeaMedical Insurance plans online and pick the right plan that suits your needs. You can also get an idea about premiums, which can vary based on the plans you choose and the number of people you add",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/investment-analysis-money-cash-profits-metaphoremployee-manager-making-investing-plans_183665-538.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Cost-Effective",
        text: "Getting a Health Insurance Policy online can save you money. Most Health Insurance companies offer a discount on premiums for first-time online purchases of the policy. In addition, it also saves your time and effort as you can purchase the best mediclaim policy in just a few clicks",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-psd/3d-rendering-quotes-frame-box-icon-isolated-3d-render-illustration_47987-7827.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Instant Quote",
        text: "You can get the quote for the mediclaim policy online. All you have to do is select a Health Insurance plan and enter information such as age, health condition, etc. It allows you to compare premiums, coverage and exclusions based on your age and health factors",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/relaxed-young-man-sitting-armchair-isolated-white_313242-964.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "At your Comfort",
        text: "Now you can buy the best Health insurance in the comfort of your home. No more physical visit is required to enquire about the Medical Insurance plans and Company as everything is available online.",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/business-decision-right-wrong-true-false-correct-incorrect-moral-choosing-option-concept-thoughtful-businessman-holding-right-wrong-left-right-hand-while-making-decision_212586-820.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Abundant Choice",
        text: "You have numerous choices, as most Medical Insurance Companies offer customers to buy Health Insurance online. Take your time to pick the right plan by analysing them in detail",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-vector/partnership-abstract-concept-illustration_335657-4437.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=sph",
        name: "Liability",
        text: "The terms and conditions of the Insurance are a bit hard to understand. Most Medical Insurance Companies have listed the benefits of their policies on their website. This makes them trustworthy and easy to understand",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-vector/business-background-design_1343-21.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=sph",
        name: "Transparency",
        text: "Online processes are transparent. After completing the required information, you will proceed further to buy your Health Insurance Policy. The premium is calculated based on your requirements. The online platform allows you to add or subtract the benefit. Sum Insured, your family members, etc. Based on your inputs, the premium is calculated and you can see the variation in the premium.",
      },
    ],
    []
  );

  // State to hold the active card indices
  const [activeCardIndices, setActiveCardIndices] = useState([0, 1]);

  // Function to switch cards every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndices((prevIndices) => {
        const nextIndex = (prevIndices[1] + 1) % allCards.length;
        return [prevIndices[1], nextIndex];
      });
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [allCards.length]);

  return (
    <div>
      <div className="container px-5 py-15 mx-auto">
        <div className="mt-20">
          <div className="font-md text-blue-600 font-bold text-center my-3">
            ONLINE BENEFITS
          </div>
          <div className="font-md text-4xl font-bold text-center my-3">
            Why Buy Health Insurance Online?
          </div>
          <div className="font-md font-medium text-center my-3 mx-[200px]">
            Buying a Medical Insurance policy online is loaded with benefits.
            Here are a few of them.
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {activeCardIndices.map((index) => (
            <div key={index} className="p-4 md:w-1/2 w-full my-10 h-[300px]">
              <div className="h-full bg-gray-100 p-8 rounded hover:shadow-2xl">
                <button
                  className="inline-flex items-center"
                  onClick={() => {
                    setActiveCardIndices((prevIndices) => {
                      const nextIndices = [...prevIndices];
                      nextIndices[1] = index;
                      return nextIndices;
                    });
                  }}
                >
                  <img
                    alt="online benefits"
                    src={allCards[index].imgSrc}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-xl font- text-gray-900">
                      {allCards[index].name}
                    </span>
                  </span>
                </button>
                <p className="leading-relaxed mb-3 mt-5">
                  {allCards[index].text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineBenefit;
