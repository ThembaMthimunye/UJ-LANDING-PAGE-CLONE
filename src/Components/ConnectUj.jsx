import React from "react";

const ConnectUj = () => {
  const data = [
    {
      id: 1,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/events.png",
      disc: "Events at UJ",
      text: "Stay updated with the latest events happening at UJ, including academic conferences, cultural festivals, sports activities, and special lectures. Find out what’s happening on and off-campus to enrich your university experience.",
    },
    {
      id: 2,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/virtual-tour.png",
      disc: "Virtual Tours",
      text: "Find the campus that you are looking for and click to launch the video. REMEMBER, this is a 360-degree virtual campus tour so move the cursor around and explore, enjoy.",
    },
    {
      id: 3,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/global-engagement-uj.png",
      disc: "Global Engagement",
      text: "Explore UJ’s global engagement through international partnerships, exchange programs, and collaborative research, fostering academic excellence and cultural understanding.",
    },
    {
      id: 4,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/uj-social-impact.png",
      disc: "UJ Social Impact",
      text: "The University of Johannesburg is committed to fostering closer connections with the community, reflecting its vision of advancing freedom, democracy, equality, and human dignity.",
    },
    {
      id: 5,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/uj-radio-station.png",
      disc: "Events at UJ",
      text: "Stay updated with the latest events happening at UJ, including academic conferences, cultural festivals, sports activities, and special lectures. Find out what’s happening on and off-campus to enrich your university experience.",
    },
    {
      id: 6,
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/virtual-tour.png",
      disc: "Virtual Tours",
      text: "Find the campus that you are looking for and click to launch the video. REMEMBER, this is a 360-degree virtual campus tour so move the cursor around and explore, enjoy.",
    },
  ];
  return (
    <div className="md:px-[8rem]">
      <div className="ml-10 my-10">
        <h1 className="font-semibold text-4xl">Connect With UJ</h1>
        <hr className="border-t-2 border-orange-600 w-[8rem] pb-10  my-2 " />
      </div>
      <div className="md:grid md:grid-cols-3">
        {data.map((list) => (
          <div className="p-5">
            <div className="group ">
              <img className="group-hover:scale-110 duration-300" src={list.src} alt="" />
              <div className="translate-x-4 -mt-[5rem] -ml-4">
                <p className=" my-8 py-2 bg-white w-[9rem] font-bold h-[4rem] text-center group-hover:bg-orange-500  group-hover:h-[3rem] group-hover:text-white flex justify-center items-center">
                  {list.disc}
                </p>
              </div>
              <p className="p-2 text-[18px]">{list.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectUj;
