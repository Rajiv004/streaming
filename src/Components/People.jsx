import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./templates/Loading";
import Topnav from "./templates/Topnav";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";



function People() {

 const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "streamin | person ";

  const GetPerson = async () => {
    try {
      const { data} = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  console.log(person)


  return person.length > 0 ? (
    <div className="w-full h-screen ">
      <div className="w-full flex  items-center">
        <h1
          onClick={() => navigate(-1)}
          className="  px-5 text-2xl text-zinc-400 flex gap-2 mb-2 font-semibold"
        >
          <i className="hover:text-[#FF005C]  ri-arrow-left-line"></i>People<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <Topnav />
        
        <div className="w-[5%]"></div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1 className="text-zinc-400">Loading...</h1>}
      >
        <Cards data={person} title="people" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People
