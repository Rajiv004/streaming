import { useNavigate } from "react-router-dom";


function Notfound() {
    const navigate = useNavigate();
    return (
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black">
            <div className=" flex  ">
                 <i onClick={()=>navigate(-1)} class="absolute top-[5%] right-[5%]  text-2xl font-bold text-white hover:text-[#FF005C] ri-close-large-line"></i>
                <img  className="   w-130 h-100 flex justify-center items-center" src="/notfound.gif" alt="notfound" />
            </div>
        </div>
    )
}

export default Notfound
