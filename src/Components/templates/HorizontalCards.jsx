import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/no_photo.jpg'


const HorizontalCards = ({data}) => {
  return (
        <div className='w-[100%] flex overflow-y-hidden lg:ml-4'>
            {data.length > 0 ? data.map((d,i)=>(<Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-30 rounded-lg overflow-hidden sm:min-w-50 max-w-50 h-[35vh] sm:h-[45vh] bg-zinc-900 mr-5 mb-5">
                <img className='w-full  h-[50%] md:h-[55%] object-cover' src={d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path }` : noimage} alt="" />
                <div className='text-white p-3 h-[50%] md:h-[45%]'>
                    <h1 className='text-lg font-semibold line-clamp-1'>{d.title||d.name||d.original_name||d.original_title}</h1>
                    <p className='text-sm sm:mt-3 mb-3 line-clamp-2'>{d.overview.slice(0,50)}...<span className='text-zinc-500'>more</span></p>
                </div>
            </Link>)):<h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing To Show</h1>}
        </div>
  )
}

export default HorizontalCards