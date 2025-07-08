import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.webp';

function Mobilesidenav({ logout }) {

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSearches();
    }, [query]);

    return (
        <div className="block lg:hidden my-2 w-full   flex  justify-center  z-10">
            <div className="flex w-full">
                <div className="flex w-full"> {/* Add w-full here */}
                    <div className="flex w-full mx-2 justify-between"> {/* Add w-full here */}
                        <i className="text-2xl text-zinc-200 ri-search-line"></i>
                        <input
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            className="text-l bg-white/10 backdrop-blur-lg border-1 border-white p-1 rounded-sm outline-none text-zinc-100 w-full mx-2" // add w-full and maybe mx-2 for spacing
                            type="text"
                            placeholder="search"
                        />
                        <i
                            onClick={() => setIsOpen(true)}
                            className="text-white text-2xl font-semibold ri-menu-line cursor-pointer"
                        ></i>
                    </div>
                    {query.length > 0 && (
                        <i
                            onClick={() => setQuery("")}
                            className="text-3xl text-zinc-200 ri-close-line cursor-pointer ml-2"
                        ></i>
                    )}
                </div>

                <div className="absolute top-12 sm:left-15 max-h-[52vh] overflow-auto rounded">
                    {searches.map((s, i) => (
                        <Link
                            to={`/${s.media_type}/details/${s.id}`}
                            key={i}
                            className="text-lg font-semibold text-zinc-500 w-full p-3 bg-zinc-700 flex items-center border-b border-zinc-500 hover:text-black hover:bg-zinc-600 duration-300"
                        >
                            <img
                                className="w-[8vh] h-[7vh] mr-5 md:mr-10 object-cover rounded shadow-md"
                                src={
                                    s.backdrop_path || s.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                                        : noimage
                                }
                                alt=""
                            />
                            <span className="text-xs md:text-lg text-white">
                                {s.name || s.title || s.original_name || s.original_title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>


            {/* Sidenav */}
            <div
                className={`
          fixed top-0 left-0 h-full bg-black p-5 overflow-y-auto z-30 
          min-w-70 max-w-70 
          transform transition-transform duration-500 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
         `}
            >
                <div className="flex items-center justify-between gap-2">
                    <h1 className="concert-one-regular glow-text text-white text-3xl">
                        <i className="text-red-100 font-bold text-4xl ri-movie-2-ai-line"></i>STREAMING
                    </h1>
                    <i
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl ri-close-line cursor-pointer"
                    ></i>
                </div>

                <nav className="flex flex-col justify-center text-zinc-400 text-lg gap-3 mb-5">
                    <h1 className="text-white whitespace-nowrap font-semibold mt-5 mb-2">New Feeds</h1>
                    <Link to="/trending" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">Trending</Link>
                    <Link to="/popular" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">Popular</Link>
                    <Link to="/movie" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">Movies</Link>
                    <Link to="/tv" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">TV shows</Link>
                    <Link to="/people" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">People</Link>
                </nav>

                <nav className="flex flex-col text-zinc-400 text-lg gap-3">
                    <h1 className="text-white font-semibold whitespace-nowrap">Website Information</h1>
                    <Link to="/subscription" className="p-3 hover:text-white hover:bg-[#FF005C] hover:rounded-lg duration-300">Subscription</Link>
                    <Link to="/contactus" className="p-3 hover:text-white hover:bg-[#FF005C] whitespace-nowrap hover:rounded-lg duration-300">Contact Us</Link>
                    <button onClick={logout} className="px-4 py-2 bg-zinc-400 hover:bg-[#FF005C] rounded text-xl text-white font-semibold">
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Mobilesidenav;
