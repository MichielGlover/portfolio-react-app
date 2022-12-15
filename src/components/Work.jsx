import React from "react";
import bmiCalculatorImg from "../assets/projects/BMI-Calculator.png";
import powerLijstImg from "../assets/projects/Powerlijst.png";

import realEstate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            Werk
          </p>
          <p className="py-6">// Bekijk wat van mijn recente werk</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${powerLijstImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                POWERLIJST
              </span>
              <div className="pt-8 text-center">
                <a href="https://MichielGlover.github.io/powerlist-react-app">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MichielGlover/powerlist-react-app">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bmiCalculatorImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              BMI-Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://michielglover.github.io/bmi-calculator-javascript/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MichielGlover/bmi-calculator-javascript">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
