import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Contactus() {

    const navigate = useNavigate();
    return (
        <div className="p-10  w-full  overflow-hidden ">
               <i onClick={()=>navigate(-1)} className=" text-white text-2xl font-bold hover:text-[#FF005C]  ri-arrow-left-line"></i>
            <h1 className="ml-30 concert-one-regular glow-text text-white  text-6xl   "><i class="text-6xl font-semibold ri-movie-2-ai-line"></i>STREAMING</h1>
            <div className="px-20 items-center grid grid-cols-2 mt-20 ">
                <div className="text-xl flex flex-col gap-5 text-white">
                    <h1 className="text-[#FF005C] font-bold">Contact Us</h1>
                    <a className=" font-semibold flex gap-2" href="mailto:brajiv912@gmail.com"><i class="text-3xl text-[#FF005C] ri-mail-line"></i>brajiv912@gmail.com</a>
                    <a className="max-w-110">For issues with payment, refunds, or plans:
                        Email: billing@[yourdomain].com</a>
                    <h1><i class="text-3xl text-[#FF005C] ri-phone-fill"></i>+91 9517667890</h1>
                    <p className="max-w-70"><i class="text-3xl text-[#FF005C] ri-map-pin-line"></i>Streaming
                        123, Film City Road, Andheri West,
                        Mumbai, Maharashtra, 400053
                        India</p>

                    <div className="text-4xl text-white flex mt-20 gap-10">
                        <i class=" glow-text  ri-instagram-line"></i>
                        <i class=" font-bold glow-text  ri-facebook-line"></i>
                        <i class=" glow-text  ri-twitter-x-line"></i>
                        <i class=" glow-text  ri-linkedin-box-fill"></i>
                    </div>
                  
                </div>
                      <div className="flex items-center   relative">
                        <img className="absolute w-130 h-200 left-80   -rotate-20 z-2" src="phone_wallpaper.jpg" alt="img" />
                        <img className="absolute w-130 h-200 right-20 mt-80  -rotate-30 z-0" src="phone_2.jpg" alt="img"/>
                    </div>



            </div>
        </div>
    )
}

export default Contactus
