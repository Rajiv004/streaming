import React from "react";
import { Link } from "react-router-dom";

function Cards({ data , title }) {


  return (
    <div className="w-full  flex flex-wrap gap-10 justify-center  bg-black  ">
      {data.map((c, i) => (
        <div className="relative">
          <Link to={`/${c.media_type || title }/details/${c.id }`} className="w-[25vh]" key={i}>    
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] w-full object-cover "
              src={`https://image.tmdb.org/t/p/original/${c.profile_path || c.poster_path || c.backdrop_path}`}
              alt="img"
            />
            <div className="flex justify-center items-center w-[25vh]">
              <h1 className="text-lg text-zinc-300 mt-3 font-semibold  line-clamp-1">  {c.name || c.title || c.original_name || c.original_title} </h1>

              {c.vote_average && (<div className="absolute -right-3 bottom-7 text-lg font-semibold text-white w-10 h-10 bg-[#FF005C] flex justify-center items-center rounded-full ">{(c.vote_average * 10).toFixed()}<sup>%</sup></div>)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Cards;
