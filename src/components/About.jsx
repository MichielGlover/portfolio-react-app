import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              Over mij
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hoi. Ik ben Michiel, leuk u te ontmoeten. Kijk gerust even rond.</p>
          </div>
          <div>
            <p>
              Ik ben gepassioneerd over het bouwen van uitstekende software die
              het leven van de mensen om me heen verbetert.
              Wat zou u doen als u een software expert binnen handbereik had?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
