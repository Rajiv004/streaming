import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import Dropdown from './templates/Dropdown'
import axios from '../utils/axios'
import Cards from './templates/Cards'
import Loading from './templates/Loading'
import InfiniteScroll from 'react-infinite-scroll-component';
import Mobilesidenav from './templates/Mobilesidenav'

function Trending() {
  const navigate = useNavigate()
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true);

  document.title = "streaming | Trending " + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`);

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false)

      }


    } catch (error) {
      console.log("Error: ", error);
    }
  };


  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending()
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  }

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);


  return (
    trending.length > 0 ? <div className="">
      <div className="w-full ">

        <div className="w-full flex justify-between items-center px-3 pt-2 lg:p-0">

          <h1 onClick={() => navigate(-1)} className=" lg:p-5 lg:text-2xl text-zinc-400 flex gap-2  font-semibold"><i className="hover:text-[#FF005C]  ri-arrow-left-line"></i>Trending</h1>
          <Topnav />

          <div className="flex">
            <Dropdown title="category"
              options={["movie", "tv", "all"]}
              func={(e) => setcategory(e.target.value)} />

            <div className="w-[2%]"></div>

            <Dropdown title="duration"
              options={["week", "day"]}
              func={(e) => setduration(e.target.value)} />
          </div>
        </div>
        <Mobilesidenav />


        <InfiniteScroll

          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1 className="text-zinc-400">Loading...</h1>}>

          <Cards data={trending} title={category} />
        </InfiniteScroll>


      </div>
    </div> : (<Loading />)
  )
}

export default Trending
