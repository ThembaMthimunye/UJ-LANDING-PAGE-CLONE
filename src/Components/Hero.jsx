import React from "react";

const Hero = () => {
  const images = [
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/check-your-status.png",
      disc: "Registration Information",
    },
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/student-finance.png",
      disc: "Late Enquiries",
    },
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/registration-information.png",
      disc: "Application Status",
    },
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/late-applications.png",
      disc: "Graduation Information",
    },
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/late-enquiries.png",
      disc: "Financial Information",
    },
    {
      src: "https://www.uj.ac.za/wp-content/uploads/2024/08/admission-and-aid.png",
      disc: "Online Payments",
    },
  ];

  return (
    <div className="px-8">
      <div className="grid grid-cols-2 gap-3 mt-10 md:grid md:grid-cols-6 lg:grid-cols-6 ">
        {images.map((image, index) => (
          <div key={index} className="bg-smokewhite-900">
            <div className="bg-gray-200 h-[245px] shadow-md flex flex-col items-center justify-center p-4 ">
              <img 
                className="w-32 h-32 mx-auto my-auto hover:scale-110 transition-transform duration-300" 
                src={image.src} 
                alt={image.disc} 
              />
              <p className="text-center text-black mt-2 hover:text-orange-500">{image.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
