import ab1 from "../../assets/ab-1.gif";
import ab2 from "../../assets/ab-2.gif";
import ab3 from "../../assets/ab-3.gif";
import ab4 from "../../assets/ab-4.gif";
function About() {
  return (
    <>
      <section id="about" className="px-10 md:px-32 md:py-10">
        <div>
          <h1 className="text-4xl font-bold text-slate-700 mb-3">My Skills</h1>
          <div>
            <div className="flex  justify-centeritems-center gap-5">
              <h1 className="text-2xl">Frontend - </h1>
              <ul className="text-xs">
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  JavaScript
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  ReactJS
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  TailwindCSS
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  React-router-dom
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  HTML
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  CSS
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  Bootstrap
                </li>
              </ul>
            </div>
            <div className="flex  justify-centeritems-center gap-5">
              <h1 className="text-2xl">Backend - </h1>
              <ul className="text-xs">
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  NodeJS
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  ExpressJS
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  MongoDB
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  Mongoose(ODM)
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  Firebase
                </li>
                <li className="m-1 inline-block bg-slate-900 text-white rounded-full py-1 px-5">
                  json-web-token
                </li>
              </ul>
            </div>
            {/* Front-end -  Back-end - , , ,
            , ,  Tools - Postman, Multer,
            Cloudinary, Git, Github, Vercel, Render, Netlify, Chrome dev tool,
            Figma Interpersonal - Teamwork, Good listener, Communication, Client
            support, Client Satisfaction */}
          </div>
        </div>

        {/* about  */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="sm:w-1/2">
            <h1 className="text-4xl font-bold text-slate-700 mb-3">About me</h1>
            <p className="text-slate-700 text-justify text-xl my-5">
              Aspiring web developer skilled in building web based solutions
              using HTML, CSS, Bootstrap, JavaScript, NodeJS, ReactJS,
              ExpressJS, MongoDB, TailwindCSS, React-router-dom, Firebase,
              Mongoose(ODM). I have implemented these technologies while
              building various kinds of projects. Passionate about contributing
              to real world projects.
              <span className="font-semibold">
                I believe building something is the best way to learn something.
                <span />
              </span>
            </p>
            <h1 className="mt-2 font-semibold text-xl text-slate-700 uppercase">
              I prefer working hard until I found the maximum result.
            </h1>
          </div>
          <div className="flex justify-center items-center sm:w-1/2">
            <div className="flex justify-center items-center">
              <img src={ab1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={ab2} alt="" />
              <img src={ab3} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={ab4} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
