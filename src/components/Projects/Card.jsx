import { FaGlobe, FaGithub } from "react-icons/fa6";
function Card({ prj }) {
  console.log(prj);
  const { img, name, client_code, server_code, live, features, techs } = prj;
  console.log();
  return (
    <>
      <div className="md:w-full">
        <div className="flex flex-col justify-between items-center gap-10">
          <div className="md:w-full">
            <h1 className="text-3xl text-slate-900 font-semibold">{name}</h1>
            <p className="flex items-center gap-5 text-blue-600 underline">
              <a className="text-xl" href={live} target="_blank">
                Live
              </a>
              <a className="text-xl" href={client_code} target="_blank">
                Client
              </a>
              <a className="text-xl" href={server_code} target="_blank">
                Server
              </a>
            </p>
            <div className="mt-2">
              <ul>
                {techs.split(", ").map((t) => (
                  <li
                    key={t}
                    className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5 text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl underline">Features</h1>
            <ul>
              {features.map((f, i) => (
                <li className="my-5 text-xl">
                  <span className="font-bold">{i + 1} - </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src={img}
              className=" border border-gray-300 rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
