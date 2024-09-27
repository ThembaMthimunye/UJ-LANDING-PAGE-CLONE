import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

const SearchSection = () => {
  return (
    <section className="bg-purple-900 my-20 md:flex md:justify-center md:items-center md:gap-10 text-center">
      <div className="bg-orange-500 h-36 mx-8 md:w-60 flex items-center justify-center">
        <FaRegArrowAltCircleRight className="text-white text-7xl" />
      </div>
      <div className="md:flex items-center my-4 gap-8">
        <p className="text-white text-3xl font-semibold text-center">
          I want to Study
        </p>
        <div className="relative w-80 md:w-96  ">
          <GoSearch className="absolute left-[5rem] top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl mt-2" />
          <input
            type="text"
            placeholder="e.g Chemical Engineering"
            className="mt-4 w-[20rem] h-14 md:w-[50rem] px-4 text-center ml-[3.6rem] "
          />
        </div>

        <div>
          <button className="bg-orange-500 h-12 w-[20rem] md:w-32 text-white my-4 md:ml-[30rem] md:mt-8">
            Search
          </button>
        </div>
      </div>
      
    </section>
    
  );
};

export default SearchSection;
