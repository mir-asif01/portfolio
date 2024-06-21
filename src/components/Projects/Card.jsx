import { FaGlobe, FaGithub } from "react-icons/fa6";
import bannerImg from "../../assets/banner.jpg"
function Card() {
    return <>
        <div className="relative">
            <img src={bannerImg} className="w-[2000px]" alt="" />
            <p className="text-center font-bold">PROJECT NAME</p>
            <div className="absolute opacity-0 hover:opacity-100 bottom-0 left-0 w-full h-full flex justify-center items-center transition-all duration-200 gap-6">
                <a className="cursor-pointer text-3xl text-slate-700 bg-gray-200 rounded-full p-3">
                    <FaGithub />
                </a>
                <a className="cursor-pointer text-3xl text-slate-700 bg-gray-200 rounded-full p-3">
                    <FaGlobe />
                </a>
            </div>
        </div>
    </>
}
export default Card