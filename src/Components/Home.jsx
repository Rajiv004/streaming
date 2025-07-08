import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from '../utils/axios'
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';
import Loading from './templates/Loading';
import Mobilesidenav from './templates/Mobilesidenav';

function Home({logout}) {

  document.title = "Streaming | Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")

  const Getwallpager = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    !wallpaper && Getwallpager();
  })

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  

  useEffect(() => {
    GetTrending();
    !wallpaper && Getwallpager();
  }, [category]);



  return wallpaper && trending ? (
    <>
    
      <Sidenav logout={logout} />
      <div className="w-full lg:w-[80%] h-full overflow-x-hidden">
         <Topnav/>
        <div className="block lg:hidden">
          <Mobilesidenav logout={logout}/>
        </div>
    
        <Header data={wallpaper} />
        <div className="flex justify-between  p-3">
          <h1 className=" text-2xl font-bold text-white ">Trending</h1>
          <Dropdown title="Filter" options={['tv', 'movie', "all"]}  func={(e) => setcategory(e.target.value)}/>

        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : <Loading/>
}

export default Home
