import React from "react";
import GaugeComponent from "react-gauge-component";

const gaugesData = [
  { value: 80, label: "Graduate Percentage" },
  { value: 39, label: "Post Grad Return" },
  { value: 55, label: "Employment Rate" },
  { value: 12, label: "Module Success Rate" },
];

const gaugeArc = {
  subArcs: [
    { limit: 20, color: "#EA4228", showTick: true },
    { limit: 40, color: "#F58B19", showTick: true },
    { limit: 60, color: "#F5CD19", showTick: true },
    { limit: 80, color: "#5BE12C", showTick: true },
    { limit: 100, color: "#5BE12C", showTick: true },
  ],
};

const Gauge = () => {
  return (
    <div className="bg-gray-100 my-10">
      <div className="md:px-[8rem]">
        <div className="ml-10 py-10">
          <h1 className="font-semibold text-4xl">Quick Facts</h1>
          <hr className="border-t-2 border-orange-600 w-[8rem] pb-10 my-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:justify-center py-10">
        {gaugesData.map((gauge, index) => (
          <div key={index} className="grid place-items-center ">
            <GaugeComponent className="md:w-[15rem] w-[15rem] lg:w-[17rem] flex justify-center" arc={gaugeArc} value={gauge.value} />
            <h1 className="text-xl sm:text-center font-semibold">{gauge.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gauge;
