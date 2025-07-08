import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Notfound from './Notfound';


function Trailer() {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);


    return ytvideo?(

        <div className="bg-[rgba(0,0,0,.9)] top-0 left-0 z-30 absolute w-full h-screen flex items-center justify-center">
            <i onClick={()=>navigate(-1)} class="absolute top-[5%] right-[5%]  text-2xl font-bold text-white hover:text-[#FF005C] ri-close-large-line"></i>

            <ReactPlayer controls height={730} width={1500} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
        </div>
    ): <Notfound/>
}
export default Trailer
