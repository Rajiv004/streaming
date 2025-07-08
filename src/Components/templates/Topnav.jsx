import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.webp'


function Topnav() {
  
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className=" hidden lg:block w-full flex  bg-white/.1   justify-center items-center  sticky top-0 z-10  ">
      <i className="text-2xl ml-20 text-zinc-100 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="  w-[40vh]  mx-10 text-xl  mt-2 sm:p-3 outline-none text-zinc-100"
        type="text"
        placeholder="search"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl sm:text-3xl text-zinc-200 ri-close-line"
        ></i>
      )}

    
     

      <div className="absolute top-[100%] left-[12%] lg:left-[20%] xl:left-[10%]   max-h-[52vh]  overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
          to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="text-xl font-semibold text-zinc-500 w-[100%] p-5 bg-zinc-700 flex justify-start items-center border-b-1 border-zinc-500 hover:text-black hover:bg-zinc-600 duration-300"
          >
            <img className="w-[3vh] lg:w-[8vh]   h-[3vh] md:h-[7vh]  mr-5 md:mr-10 object-cover rounded shadow-md " src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path }` : noimage  } alt="" />
            <span className=" text-xs md:text-lg text-white">
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
