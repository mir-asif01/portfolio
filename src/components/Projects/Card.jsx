import { FaGlobe, FaGithub } from "react-icons/fa6";
function Card({ prj }) {
  const { img, name, client_code, live } = prj;
  return (
    <>
      <div className="relative p-4 border rounded-md border-slate-400">
        <img src={img} className="border border-gray-300 rounded-md" alt="" />
        <p className="mt-7 text-center text-slate-700 text-xl font-semibold">
          {name}
        </p>
        <div className="absolute opacity-0 hover:opacity-100 bottom-0 left-0 w-full h-full flex justify-center items-center transition-all duration-200 gap-6 bg-black/10">
          <a
            target="_blank"
            href={client_code}
            className="cursor-pointer text-3xl bg-slate-800 rounded-full p-3 text-white transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href={live}
            className="cursor-pointer text-3xl bg-slate-800 rounded-full p-3 text-white transition-all duration-200"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
