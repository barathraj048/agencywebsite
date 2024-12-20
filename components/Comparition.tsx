import React from "react";

function Comparison() {
  const parameters = [
    "Time taken",
    "Website images",
    "Website videos",
    "Total cost",
    "Your time",
    "Proj tracking",
  ];

  const ravanValues = [
    "8-20 days",
    "included",
    "included",
    "$1-3k",
    "1Hr+",
    "Yes",
  ];

  const othersValues = [
    "1 - 3 months",
    "not included",
    "not included",
    "$2-10k+",
    "3 hr+",
    "No",
  ];

  const renderCard = (title: any, values: any) => (
    <div
      id="whyus"
      className="col-span-1 bg-[#11142B] bg-opacity-70 rounded-3xl flex flex-col items-center justify-center text-center p-3 sm:p-2 md:p-6 lg:p-8"
    >
      <h4 className="text-xs sm:text-sm md:text-2xl lg:text-3xl mb-2 sm:mb-2 md:mb-6 lg:mb-8 font-bold text-white">
        {title}
      </h4>
      <ul className="text-[8px] sm:text-[10px] md:text-base font-bold text-[#535562] uppercase space-y-3 sm:space-y-2 md:space-y-5 lg:space-y-6">
        {values.map((value: any, index: any) => (
          <li key={index} className="flex justify-center">
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mt-32 -mb-64">
      <div>
        <h1 className="heading font-bold flex justify-center items-center gap-2 text-xl sm:text-lg md:text-3xl lg:text-4xl">
          Why <span className="text-purple"> Us?</span>
        </h1>
        <h2 className="flex justify-center items-center text-xs sm:text-[10px] md:text-base lg:text-lg font-bold text-[#535562] uppercase mt-2">
          Let’s make a quick comparison!!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 sm:p-2 md:p-6 lg:p-8 rounded-xl">
          {/* Parameters */}
          <div className="col-span-1 bg-[#11142B] bg-opacity-70 flex flex-col items-center justify-center w-full h-full rounded-3xl p-3 sm:p-2 md:p-6 lg:p-8">
            <h4 className="text-xs sm:text-sm md:text-2xl lg:text-3xl mb-2 sm:mb-2 md:mb-6 lg:mb-8 font-bold text-white">
              Offering
            </h4>
            <ul className="text-[8px] sm:text-[10px] md:text-base font-bold text-[#535562] uppercase space-y-3 sm:space-y-2 md:space-y-5 lg:space-y-6">
              {parameters.map((param, index) => (
                <li key={index} className="flex justify-center">
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ravan Values */}
          {renderCard("Ravan", ravanValues)}

          {/* Other Values */}
          {renderCard("Others", othersValues)}
        </div>
      </div>
    </div>
  );
}

export default Comparison;
