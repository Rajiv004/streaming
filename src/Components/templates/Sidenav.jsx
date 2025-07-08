import React from "react";
import { Link } from "react-router-dom";

function Sidenav({logout}) {



  return (
    <div className="hidden lg:block w-70 h-full p-5 overflow-y-auto">
      <div className="flex items-center gap-2">
        
        <h1 className=" concert-one-regular glow-text text-white text-xl md:text-2xl xl:text-4xl  "><i className="text-red-100 font-bold text-xl md:text-2xl xl:text-5xl ri-movie-2-ai-line"></i>STREAMING</h1>
        
      </div>
      <nav className="flex flex-col text-zinc-400 text-lg gap-3 mb-5">
        <h1 className="text-white font-semibold mt-3 lg:mt-10 mb-2">New Feeds</h1>

        <Link to="/trending" className="  p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-1 ri-fire-fill"></i>Trending
        </Link>
        <Link to="/popular" className=" p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link to="/movie" className="  p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-2 ri-movie-2-ai-fill"></i>Movies
        </Link>
        <Link to="/tv" className="  p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-2 ri-tv-2-line"></i>TV shows
        </Link>
        <Link to="/people" className=" p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-2 ri-team-fill"></i>People
        </Link>
      </nav>
      
      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white font-semibold  lg:p-3">Website Information</h1>

        <Link to="/subscription" className=" p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
        <i class="ri-rss-line"></i>Subscription
        </Link>
        <Link to="/contactus" className=" p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg hover:duration-500">
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
        
        <button onClick={logout} className="py-2 bg-[#FF005C] rounded text-xl text-white font-semibold "><i class="text-white ri-logout-box-line"></i>Logout</button>
      </nav>
    </div>
  );
}

export default Sidenav;
