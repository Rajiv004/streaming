import React from "react";
import { Link } from "react-router-dom";


function Header({ data }) {
  //console.log(data)
  return (
    <div className="-mt-15">
      <div

        style={{
          background: `linear-gradient(rgba(0,0,0,.1 ), rgba(0,0,0,.3), rgba(0,0,0,.6)) ,
         url(https://image.tmdb.org/t/p/original/${data.profile_path || data.backdrop_path
            })`,
          backgroundPosition: "75% 25%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}
        className="w-full h-[60vh] flex flex-col justify-end p-5 lg:p-10"
      >
         

         
        <h1 className="text-white text-lg md:text-4xl font-black mt-40">

          {data.name ||
            data.title ||
            data.original_name ||
            data.original_title}
        </h1>
        <p className="hidden sm:block text-white w-[70%]  mt-2 md:mt-5">
          {data.overview.slice(250)} ...
          <Link to={`${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
        </p>
        <p className="text-white flex gap-2 mt-2">
          {" "}
          <i className="ri-calendar-check-line"></i>
          {data.release_date || "no information"}
        </p>
        <p className="text-white flex gap-2">
          {" "}
          <i className="ri-film-line"></i>
          {data.media_type}
        </p>

        <Link to={`${data.media_type}/details/${data.id}/trailer`} className=" p-1 md:p-3 text-sm lg:text-lg text-white rounded font-semibold mt-4 bg-[#FF005C] flex md:whitespace-nowrap gap-1 w-fit hover:shadow-lg shadow-white">
          <i className="ri-play-fill"></i>Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Header;
