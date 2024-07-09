import frontend from "../../assets/front.png";
import backend from "../../assets/back.png";
import tool from "../../assets/tool.png";
function Skills() {
  return (
    <>
      <section id="about" className="px-10 md:px-32 md:py-10">
        {/* skill  */}
        <div className="mb-20">
          <h1 className="text-3xl underline font-semibold text-slate-700 mb-3">
            Skills
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:w-full">
            <div className="w-full md:w-1/2">
              <img src={frontend} className="w-full" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-semibold mb-10">Frontend</h1>
              <div className="text-xl grid grid-cols-3 gap-3">
                <p>JavaScript</p>
                <p>ReactJS</p>
                <p>TailwindCSS</p>
                <p>React-router</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:w-full">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-semibold mb-10">Backend</h1>
              <div className="text-xl grid grid-cols-3 gap-3">
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>MognoDB</p>
                <p>Mongoose(ODM)</p>
                <p>Firebase</p>
                <p>JWT</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={backend} className="w-full" alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:w-full">
            <div className="w-full md:w-1/2">
              <img src={tool} className="w-full" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-semibold mb-10">Tools</h1>
              <div className="text-2xl grid grid-cols-4 gap-10">
                <p>Postman</p>
                <p>Multer</p>
                <p>Cloudinary</p>
                <p>Git</p>
                <p>Github</p>
                <p>Vercel</p>
                <p>Render</p>
                <p>Netlify</p>
                <p>Chrome dev tool</p>
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>

        {/* about  */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="sm:w-1/2">
            <h1 className="text-3xl underline font-semibold text-slate-700 mb-3">
              About me
            </h1>
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
        </div> */}
      </section>
    </>
  );
}
export default Skills;
