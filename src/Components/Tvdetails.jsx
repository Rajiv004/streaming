import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./templates/Loading";
import Rating from "./templates/Rating";
import HorizontalCards from "./templates/HorizontalCards";

function Tvdetails() {

  const { id } = useParams();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.tv);
    console.log(info);
  
    useEffect(() => {
      dispatch(asyncloadtv(id));
  
      return () => {
        dispatch(removetv());
      };
    }, [id]);
  
    const navigate = useNavigate();
  
  
    {/* main content out on screen */}
  
  return (
  info ?  ( <div
     style={{
        background: `linear-gradient(rgba(0,0,0,.5 ), rgba(0,0,0,.6), rgba(0,0,0,.7)) ,
        url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-full px-[10%] overflow-y-auto">
     
      {/*part 1 navigation*/}
      <nav className="h-[10vh] w-full text-white flex items-center gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="text-white text-3xl hover:text-[#FF005C]  ri-arrow-left-line"
        ></Link>
        <a
          className="hover:text-[#FF005C]"
          target="_blank"
          href={info.detail.homepage}
        >
          <i class="ri-home-8-line"></i>
        </a>
        <a
          className="hover:text-[#FF005C]"
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          className=" text-black px-1 rounded text-sm font-black bg-yellow-400"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDb
        </a>
      </nav>

      {/* part 1 poster and detail */}
      <div className="">
        <div className="">

          <div className="md:flex">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] w-[80%] object-cover border-2 border-zinc-300 "
              src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path
                }`}
              alt="img"
            />

            <div className="content md:ml-20 text-white">
              <h1 className=" text-5xl font-bold  ">
                 {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                 <small className="text-sm ml-2 text-zinc-400">({info.detail.first_air_date.split("-")[0]})</small>
              </h1>
              {info.detail.vote_average && (<div className=""><Rating rating= {(info.detail.vote_average).toFixed()/2}/></div>)} 
              <h1 className="text-2xl font-bold ">User Score</h1>
              <h1 className="font-semibold">{info.detail.release_date}</h1>
              <h1 className="font-semibold text-lg">{info.detail.genres.map((g) => g.name).join(",")}</h1>
              <h1 className="font-semibold">Duration: {info.detail.runtime}min</h1>
              <h1 className="mt-5 font-bold text-2xl">Overview</h1>
              <p className="text-md">{info.detail.overview}</p>
              <h1 className="mt-5 text-2xl font-bold">Language</h1>
              <p className="pb-10 text-md">{info.translations.join(", ")}</p>

              <Link to={`${pathname}/trailer`}  className="p-3 bg-gradient-to-r from-rose-400 to-rose-600 rounded font-bold"><i className="ri-play-fill"></i>watch trailer</Link>
            </div>
          </div>
        </div>
        {/* part 3 available on platform*/}

        <div className="w-[40%]  ">
          <div className="mt-5">
            {info.watchprovider?.flatrate && (
              <div className="flex gap-x-2 items-center text-white rounded-lg ">
                <h1 className="text-xl whitespace-nowrap concert-one-regular">Available on Platform</h1>
                {info.watchprovider?.flatrate?.map((w, i) => (

                  <img
                    key={i}
                    className="w-10 h-10 rounded-lg object-cover"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    alt={w.provider_name}
                  />
                ))}
              </div>
            )}
          </div>

          {info.watchprovider?.rent && (
            <div className="flex gap-x-2 mt-5 items-center text-white">
              <h1 className="whitespace-nowrap text-xl concert-one-regular">Available on rent</h1>
              {info.watchprovider?.rent?.map((w, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt={w.rent_name}
                />
              ))}
            </div>
          )}

          {info.watchprovider?.buy && (
            <div className="flex gap-x-2 mt-5 items-center text-white ">
              <h1 className="whitespace-nowrap text-xl concert-one-regular">Available to buy</h1>
              {info.watchprovider?.buy?.map((w, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt={w.rent_name}
                />
              ))}
            </div>
          )}

        </div>
      </div>
      
       {/* pard 4 recomendations and similar stuff  */}

      <div className="mt-10">
        <h1 className="text-3xl font-bold text-white p-3">Recommendations</h1>
        <hr className="text-white py-3"></hr>

        <HorizontalCards
          data={
            info.recommendations?.results?.length > 0
              ? info.recommendations.results
              : info.similar?.results || []
          }
        />

       
      </div>
      <Outlet/>
      

  </div> ) : (<Loading/>)
    
  )
}

export default Tvdetails
