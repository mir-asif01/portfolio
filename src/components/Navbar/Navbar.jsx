import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { RxCross1 } from "react-icons/rx"
import { Link, NavLink } from "react-router-dom"
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <nav className="px-10 py-5 flex justify-between sticky top-0 z-20 items-center sm:px-32 bg-gray-50">
        <div>
          <h1 className="text-slate-800 text-4xl font-bold">
            <NavLink to={"/"}>Asif</NavLink>
          </h1>
        </div>
        <div className="relative md:hidden">
          <IoMenu
            onClick={() => setOpenMenu(!openMenu)}
            className={`text-5xl cursor-pointer ${
              openMenu === true ? "hidden" : "transition-all"
            }`}
          />
          <RxCross1
            onClick={() => setOpenMenu(!openMenu)}
            className={`text-5xl cursor-pointer ${
              openMenu === false ? "hidden" : "block transition-all"
            }`}
          />

          <ul
            className={`bg-gray-100 px-20 py-10 flex flex-col items-center justify-center absolute right-0 top-12 rounded-md transition-all duration-1000 ${
              openMenu ? "transition-all duration-200" : "hidden"
            }`}
          >
            <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li className="text-2xl font-semibold my-4 hover:text-slate-500 cursor-pointer">
              <NavLink to={"/skills"}>Skills</NavLink>
            </li>
          </ul>
        </div>
        <ul className="hidden md:flex justify-between items-center gap-10 text-xl">
          <li className="cursor-pointer">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to={"/skills"}>Skills</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
