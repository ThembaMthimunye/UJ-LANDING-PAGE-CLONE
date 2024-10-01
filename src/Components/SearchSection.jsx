import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const SearchSection = () => {
  return (
    <section className="bg-purple-900 text-center shadow-md md:flex ">
      <div className="bg-orange-500 shadow-md h-36 md:w-[6rem] mx-8  flex items-center justify-center">
        <FaRegArrowAltCircleRight className="text-white text-7xl" />
      </div>
      <div className="md:flex items-center my-4 gap-8">
        <p className="text-white text-3xl font-semibold text-center">
          I want to Study
        </p>
        <div className="md:flex gap-8 justify-center">
          <div className="relative font-bold    ">
            <GoSearch className="absolute left-10 md:left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl mt-1" />
            <input
              type="text"
              placeholder="e.g Chemical Engineering"
              className="my-4 w-[15rem] md:w-[17rem] lg:w-[30rem] h-14 text-center mx-auto  "
            />
          </div>

          <div className=" flex justify-center md:align-center">
            <button className="bg-orange-500 h-12 md:h-14 md:mt-4  w-[15rem] md:w-[6rem] text-white my-3">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
