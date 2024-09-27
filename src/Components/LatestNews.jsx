import React from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const LatestNews = () => {

    const data=[
        {
            id:1,
            src:"https://news.uj.ac.za/wp-content/uploads/2024/09/Untitled-19.jpeg",
            head:"UJ celebrates winners of the 2024 Three Minute Thesis Competition",
            disc:"The University of Johannesburg’s Postgraduate School is proud to announce the winners of the 2024...",
        },
        {
            id:2,
            src:"https://news.uj.ac.za/wp-content/uploads/2024/02/VC-profile-Image-scaled.jpg",
            head:"Winners announced for the 2023 UJ Prize for South African Writing in English",
            disc:"The University of Johannesburg Prize for South African Writing (UJ Prize) in English is pleased t...",
        },
        {
            id:3,
            src:"https://news.uj.ac.za/wp-content/uploads/2024/09/2024-09-17-CBE-Eagles-Fly-Above-the-Storm-Womens-Conference-65-scaled.jpg",
            head:"Vice-Chancellor Message – 20 September 2024",
            disc:"Dear UJ community, As the Heritage Month celebrations continue in South Africa, I pondered some o...",
        },
        {
            id:4,
            src:"https://news.uj.ac.za/wp-content/uploads/2024/09/Senzo-Ndlangamandla-CASA-leads-with-the-people-fostering-inclusivity-and-empowerment-1.jpg",
            head:"UJ’s Eagles Fly Above the Storm conference shifts mindsets and breaks barriers",
            disc:"The University of Johannesburg (UJ)’s College of Business and Economics (CBE) recently hosted the...",
        },
        {
            id:5,
            src:"https://news.uj.ac.za/wp-content/uploads/2024/09/UJ-Mens-Rowing-Team.jpg",
            head:"UJ celebrates winners of the 2024 Three Minute Thesis Competition",
            disc:"Senzo Ndlangamandla CA(SA) has been described as a visionary leader igniting excellence in accoun...",
        },
    ]
  return (
   
     <Slide>
      {data.map((data, index) => (
        <div className="each-slide-effect " key={index}>
          <div className=" bg-cover ">
            <img src={data.src} alt="" className="bg-cover w-[100] h-[100] md:w-[10rem]" />
            <h2 className='text-xl font-bold'>{data.head}</h2>
            <p>{data.disc}</p>
          </div>
        </div>
      ))}
    </Slide>

  )
}

export default LatestNews
