import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./templates/Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Mobilesidenav from "./templates/Mobilesidenav";

function Tvshows() {

  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "streamin | Tvshows ";

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  console.log(category);

  return tv.length > 0 ? (
    <div className="w-full h-screen ">
      <div className="w-full flex justify-between items-center px-3 pt-2 lg:p-0">

        <h1 onClick={() => navigate(-1)} className=" lg:p-5 lg:text-2xl text-zinc-400 flex gap-2  font-semibold"><i className="hover:text-[#FF005C]  ri-arrow-left-line"></i>Tv show</h1>
        <Topnav />


        <Dropdown title="category"
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)} />

        <div className="w-[2%]"></div>
      </div>
      <Mobilesidenav />

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1 className="text-zinc-400">Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows
