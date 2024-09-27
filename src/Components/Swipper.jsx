import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default () => {
  const data = [
    {
      id: 1,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/Untitled-19.jpeg",
      head: "UJ celebrates winners of the 2024 Three Minute Thesis Competition",
      disc: "The University of Johannesburg’s Postgraduate School is proud to announce the winners of the 2024...",
    },
    {
      id: 2,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/02/VC-profile-Image-scaled.jpg",
      head: "Winners announced for the 2023 UJ Prize for South African Writing in English",
      disc: "The University of Johannesburg Prize for South African Writing (UJ Prize) in English is pleased t...",
    },
    {
      id: 3,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/2024-09-17-CBE-Eagles-Fly-Above-the-Storm-Womens-Conference-65-scaled.jpg",
      head: "Vice-Chancellor Message – 20 September 2024",
      disc: "Dear UJ community, As the Heritage Month celebrations continue in South Africa, I pondered some o...",
    },
    {
      id: 4,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/Senzo-Ndlangamandla-CASA-leads-with-the-people-fostering-inclusivity-and-empowerment-1.jpg",
      head: "UJ’s Eagles Fly Above the Storm conference shifts mindsets and breaks barriers",
      disc: "The University of Johannesburg (UJ)’s College of Business and Economics (CBE) recently hosted the...",
    },
    {
      id: 5,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/UJ-Mens-Rowing-Team.jpg",
      head: "UJ celebrates winners of the 2024 Three Minute Thesis Competition",
      disc: "Senzo Ndlangamandla CA(SA) has been described as a visionary leader igniting excellence in accoun...",
    },
    {
      id: 6,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/Untitled-19.jpeg",
      head: "UJ celebrates winners of the 2024 Three Minute Thesis Competition",
      disc: "The University of Johannesburg’s Postgraduate School is proud to announce the winners of the 2024...",
    },
    {
      id: 7,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/02/VC-profile-Image-scaled.jpg",
      head: "Winners announced for the 2023 UJ Prize for South African Writing in English",
      disc: "The University of Johannesburg Prize for South African Writing (UJ Prize) in English is pleased t...",
    },
    {
      id: 8,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/2024-09-17-CBE-Eagles-Fly-Above-the-Storm-Womens-Conference-65-scaled.jpg",
      head: "Vice-Chancellor Message – 20 September 2024",
      disc: "Dear UJ community, As the Heritage Month celebrations continue in South Africa, I pondered some o...",
    },
    {
      id: 9,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/Senzo-Ndlangamandla-CASA-leads-with-the-people-fostering-inclusivity-and-empowerment-1.jpg",
      head: "UJ’s Eagles Fly Above the Storm conference shifts mindsets and breaks barriers",
      disc: "The University of Johannesburg (UJ)’s College of Business and Economics (CBE) recently hosted the...",
    },
    {
      id: 10,
      src: "https://news.uj.ac.za/wp-content/uploads/2024/09/UJ-Mens-Rowing-Team.jpg",
      head: "UJ celebrates winners of the 2024 Three Minute Thesis Competition",
      disc: "Senzo Ndlangamandla CA(SA) has been described as a visionary leader igniting excellence in accoun...",
    },
  ];
  return (
    <>
      <div className="ml-10">
        <h1 className="font-semibold text-4xl">Latest News</h1>
        <hr className="border-t-2 border-orange-600 w-[8rem] pb-10  my-2 " />
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((data, index) => (
          <div className="each-slide-effect " key={index}>
            <div className="">
              <SwiperSlide>
                <div className="md:px-20 shadow-md md:h-[28rem] md:w-[35rem] bg-gray-100 h-[12rem] px-3 hover:bg-gradient-to-r from-gray-500 duration:300 rounded-md6">
                  <img
                    src={data.src}
                    alt=""
                    className="bg-cover md:w-[560px] md:h-[300px] md:w-[10rem] rounded-md pt-8 size-[8rem] hover:scale-110 duration-500"
                  />
                  <h2 className="md:text-xl font-bold my-5 text-[10px] font-serif">
                    {data.head}
                  </h2>
                  <p className="text-gray-600 font-serif md:block hidden">
                    {data.disc}
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </div>
        ))}
      </Swiper>
    </>
  );
};
