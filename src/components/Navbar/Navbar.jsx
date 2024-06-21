import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return <>
        <nav className="px-10 py-5 flex justify-between items-center sm:px-32 sm:py-10">
            <div>
                <h1 className="text-slate-800 text-4xl font-bold">ASIF</h1>
            </div>
            <div className="relative">
                <IoMenu onClick={() => setOpenMenu(!openMenu)} className={`text-5xl ${openMenu === true ? "hidden" : "transition-all"}`} />
                <RxCross1 onClick={() => setOpenMenu(!openMenu)} className={`text-5xl ${openMenu === false ? "hidden" : "block transition-all"}`} />


                <ul className={`bg-gray-100 px-20 py-10 flex flex-col items-center justify-center absolute right-0 top-12 rounded-md transition-all ${openMenu ? "" : "hidden"}`}>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">HOME</li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">PROJECTS</li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">ABOUT</li>
                    <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">RESUME</li>
                </ul>
            </div>
        </nav>

    </>
}
export default Navbar