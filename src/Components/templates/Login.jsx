import React, { useState } from 'react'

function Login({onLogin}) {

    const [userid , setuserid] = useState(" ");
    const [password , setpassword] = useState(" ");
    const [error , seterror] = useState(" ");


    const handleLogin = (e) =>{
         e.preventDefault();
         if(userid === "123@gmail.com" && password === "123"){
            seterror(" ");
            onLogin();
         } else {
            seterror('Invalid email or password');
         }
         
    };
    
    return (
        <div className="overflow-hidden relative w-full h-screen xl:flex bg-[url('/netflix.jpg')] bg-contain text-white p-10 h-64 w-full ">

            <div className="flex flex-col items-center">

                <h1 className=" concert-one-regular glow-text text-white  text-5xl md:text-8xl p-10 "><i className="text-white font-bold text-5xl md:text-9xl ri-movie-2-ai-line"></i>STREAMING</h1>

              
                  
                <form onSubmit={handleLogin} className="flex  flex-col lg:h-150 md:w-[50%] lg:w-[70%] p-10 text-white bg-red/10 backdrop-blur-md border border-white  rounded-xl z-10 ">
                    <h1 className="text-sm lg:text-2xl text-white font-black">Email-id</h1>
                    <input value={userid} onChange={(e)=>setuserid(e.target.value)} type="email" className="p-5 mt-2  rounded-lg bg-white/.1 backdrop-blur-md border border-white" placeholder="email"></input>

                    <h1 className="text-sm lg:text-2xl text-white font-black mt-5">Password</h1>
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="p-5 mt-2  rounded-lg bg-white/.1 backdrop-blur-md border border-white" placeholder="password"></input>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <button className="p-3 lg:p-4 bg-red/10 backdrop-blur-md border border-white text-white text-xl font-bold  rounded-lg mt-10 hover:bg-[#d60217]/50 hover:shadow-xl shadow-[#d60015]">Login</button>
                </form>
             

            </div>

           <div className="hidden xl:block flex items-center ml-100 mb-40">
            <div className=" opacity-60 mt-30 w-40 h-40 bg-[rgb(255, 0, 0)] shadow-[0px_0px_150px_180px_rgb(228,0,0)]"></div>
             <img className="  z-10 w-125 absolute right-0 -bottom-20 rotate-10 border-2 border-white" src="phone_2.jpg" alt="img"/> 
                <img className=" border-white  z-12 w-110 absolute -rotate-20 -bottom-50 right-60 border-2 border-white" src="phone_wallpaper.jpg" alt="img"/> 
                
           </div>
        </div>
    )
}

export default Login
