import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return <>
        <nav className="px-10 py-5 flex justify-between items-center sm:px-32 sticky top-0 z-10 bg-gray-50">
            <div>
                <h1 className="text-slate-800 text-4xl font-bold">ASIF</h1>
            </div>
            <div className="relative">
                <IoMenu onClick={() => setOpenMenu(!openMenu)} className={`text-5xl cursor-pointer ${openMenu === true ? "hidden" : "transition-all"}`} />
                <RxCross1 onClick={() => setOpenMenu(!openMenu)} className={`text-5xl cursor-pointer ${openMenu === false ? "hidden" : "block transition-all"}`} />


                <ul className={`bg-gray-100 px-20 py-10 flex flex-col items-center justify-center absolute right-0 top-12 rounded-md transition-all duration-1000 ${openMenu ? "transition-all duration-200" : "hidden"}`}>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer"> <a href="#home">HOME</a></li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer"> <a href="#projects">PROJECTS</a></li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer"> <a href="#about">ABOUT</a>
                    </li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer"><a target="_blank" href="https://drive.google.com/file/d/1uF3w1YyRxUJZc1cS9k_dQf72d6bOSsX7/view">RESUME</a></li>
                </ul>
            </div>
        </nav>

    </>
}
export default Navbar