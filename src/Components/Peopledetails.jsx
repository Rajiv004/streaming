import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleAction";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./templates/Loading";
import Rating from "./templates/Rating";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

function Peopledetails() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  

  useEffect(() => {
    dispatch(asyncloadpeople(id));

    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[5%] w-full pb-20 flex flex-col overflow-y-auto">
      <nav className="h-[10vh] w-full text-white flex items-center gap-10 text-2xl ">
        <Link
          onClick={() => navigate(-1)}
          className="text-white text-3xl hover:text-[#FF005C]  ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full lg:flex gap-10 mt-5">
        {/* part 2 left poster and details */}
        <div className=" lg:w-[30%] flex flex-col flex-wrap">
          <div className=" w-full flex items-center justify-center gap-3 lg:justify-normal lg:gap-0 lg:block">
            <img
              className="h-[80vh] rounded-3xl lg:h-[50vh] object-cover"
              src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
              alt="img"
            />

            {/* <h1 className="pb-2">{info.detail.name}</h1> */}
            <hr className="text-zinc-400 text-white mt-5 h-2 "></hr>
          </div>

          {/* part 3 right details and information */}

          <div className=" text-4xl flex gap-5 mt-2 ">
            <a
              className="text-white hover:text-[#FF005C]"
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i class="text-zinc-400 ri-earth-fill"></i>
            </a>

            <a
              className="text-white hover:text-[#FF005C]"
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="text-zinc-400 ri-facebook-circle-fill"></i>
            </a>

            <a
              className="text-white hover:text-[#FF005C]"
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="text-zinc-400 ri-instagram-line"></i>
            </a>

            <a
              className="text-white hover:text-[#FF005C]"
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i class="text-zinc-400 ri-twitter-x-line"></i>
            </a>
          </div>

          <div className="text-zinc-400 flex flex-col  mt-5">
            <h1 className="text-3xl font-semibold">Personal info</h1>

            <h1 className="text-2xl font-semibold mt-2">Known For</h1>
            <h1 className="text-lg fontsemibold">
              {info.detail.known_for_department}
            </h1>

            <h1 className="text-2xl font-semibold mt-2">Gender</h1>
            <h1 className="text-lg fontsemibold">
              {info.detail.gender === 2 ? "male" : "Female"}
            </h1>

            <h1 className="text-2xl font-semibold mt-2">Birth Date</h1>
            <h1 className="text-lg fontsemibold">{info.detail.birthday}</h1>

            <h1 className="text-2xl font-semibold mt-2">Death Date</h1>
            <h1 className="text-lg fontsemibold">
              {info.detail.deathday ? info.detail.deathday : "Still Alive"}
            </h1>

            <h1 className="text-2xl font-semibold mt-2">Place of Birth</h1>
            <h1 className="text-lg fontsemibold">
              {info.detail.place_of_birth}
            </h1>

            <h1 className="text-2xl font-semibold mt-2">Also Known as</h1>
            <h1 className="text-lg fontsemibold">
              {info.detail.also_known_as.join(", ")}
            </h1>
          </div>
        </div>

        <div className="lg:w-[70%] md:flex flex-col flex-wrap">
          <div className="text-zinc-400">
            <h1 className="text-7xl font-bold">{info.detail.name}</h1>
            <h1 className="text-xl font-semibold my-3">Biography</h1>
            <p className="mb-10">{info.detail.biography}</p>
          </div>

          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="flex  items-center justify-between">
            <h1 className="text-2xl text-zinc-400 mt-5 font-semibold">
              Acting
            </h1>

            <Dropdown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="list-disc p-5 text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.5)] border-2 border-zinc-700">


            {info[category + "Credits"].cast.map((c, i) => (


              <li key={i} className=" hover:text-white duration-300 cursor-pointer mt-5">
                <Link to={`${category}/details/${c.id}`} className="">
                  <span className="">
                    {" "}
                    {c.name ||
                      c.title ||
                      c.original_name ||
                      c.original_title}
                  </span>

                  <span className="block ml-5">{c.character && `Character Name : ${c.character}` }
                    </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Peopledetails;
