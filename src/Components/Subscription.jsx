import React from 'react'
import { useNavigate } from 'react-router-dom'

function Subscription() {

  const navigate = useNavigate()
  return (
    <div className="w-full h-screen p-10 ">
      <i onClick={() => navigate(-1)} className="p-5 text-2xl font-bold text-white hover:text-[#FF005C]  ri-arrow-left-line"></i>
      <div className="flex justify-between items-center mx-20">
        <div className="">
          <h1 className="text-white text-2xl">choose the plan that's right for you</h1>
          <h1 className="text-zinc-500"><i className="font-black text-xl text-red-500 ri-check-line"></i>unlimited movies and TV shows. watch all you want ad-free</h1>
          <h1 className="text-zinc-500"><i className="font-black text-xl text-red-500 ri-check-line"></i>change or cancel your plan anytime</h1>
        </div>
        <div className="bg-zinc-900 px-10 py-5 rounded-2xl">
          <h1 className="text-white flex items-center gap-3 "><i class="glow-text text-red-100 text-5xl ri-gift-line"></i>Start your free month</h1>
        </div>
      </div>
      <div className=" grid grid-cols-[2fr_1fr_1fr_1fr] pt-10">
        <div className="  pt-5 ">
          <h1 className="text-center concert-one-regular glow-text text-white  text-5xl "><i class="text-6xl font-semibold ri-movie-2-ai-line"></i>STREAMING</h1>
          <div className="pt-20 px-20  flex flex-col gap-5 text-xl text-white">
            <h1><i class="text-red-500 ri-hd-line"></i>HD available</h1>
            <h1><i class="text-red-500 ri-4k-line"></i>4k+ HDR available</h1>
            <h1><i class="text-red-500 ri-tv-2-line"></i>watch on your laptop and TV</h1>
            <h1><i class="text-red-500 ri-smartphone-line"></i>watch on your mobile phone and tablet</h1>
            <h1><i class="text-red-500 ri-eye-2-line"></i>screen you can can watch on at the same time</h1>
          </div>
        </div>
        <div className="text-lg text-white text-center pb-5 rounded-2xl hover:bg-zinc-900 ">basic <span>$7.99</span>
          <hr className="mx-10 mt-4 text-zinc-400"></hr>
          <div className="pt-20 flex flex-col gap-6">
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <h1 className="text-zinc-500 font-bold">1</h1>
             <button className="bg-[#FF005C] p-3 mx-10 rounded ">choose plan</button>
          </div>
        </div>
        <div className="text-lg text-white text-center pb-5 rounded-2xl hover:bg-zinc-900">standard <span>$10.99</span>
          <hr className="mx-10 mt-4 text-zinc-400"></hr>
          <div className="pt-20 flex flex-col gap-6">
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <h1 className="text-zinc-500 font-bold">2</h1>
             <button className="bg-[#FF005C] p-3 mx-10 rounded ">choose plan</button>
          </div>
        </div>
        <div className="text-lg text-white text-center pb-5 rounded-2xl hover:bg-zinc-900">premium <span>$13.99</span>
          <hr className="mx-10 mt-4 text-zinc-400"></hr>
          <div className="pt-20 flex flex-col gap-6">
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <i class=" text-2xl text-zinc-500 ri-close-circle-line"></i>
            <h1 className="text-zinc-500 font-bold">4</h1>
            <button className="bg-[#FF005C] p-3 mx-10 rounded ">choose plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
