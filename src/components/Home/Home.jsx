import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="flex min-h-screen justify-center items-center p-3 md:p-40">
      <div className="md:w-2/3 flex flex-col items-center justify-center text-center">
        <img
          src={bannerImg}
          className="rounded-full p-2 md:h-52 md:w-52"
          alt=""
        />
        <h1 className="text-2xl sm:text-4xl sm:mb-4 text-slate-700">
          Mir Kamrul Ahsan Asif
        </h1>
        <h1 className="text-slate-700 font-semibold">
          Web Developer | JavaScript | MERN | NodeJS | ReactJS
        </h1>
        <div className="flex justify-center items-center gap-5 mt-5">
          <a target="_blank" href="https://github.com/mir-asif01">
            <FaGithub className="text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mir-kamrul-ahsan-asif-7a19a62b7/"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61554728202989"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a target="_blank" href="https://x.com/mir_asif000111">
            <FaTwitter className="text-3xl" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href={
              "https://drive.google.com/file/d/1vOXRk1sK0LojkzcGEaozNEh8dDzqGOk2/view"
            }
            target="_blank"
            className="bg-stone-200 mt-5 px-6 py-1 rounded-full text-lg text-slate-900 font-semibold   hover:bg-slate-900 hover:text-stone-200"
          >
            Resume
          </a>
          <a
            href={
              "https://drive.google.com/file/d/1Nw9SLv8IynEmXa2Qh1VGgIXwbUGd05jC/view?usp=drive_link"
            }
            target="_blank"
            className="bg-stone-200 mt-5 px-6 py-1 rounded-full text-lg text-slate-900 font-semibold   hover:bg-slate-900 hover:text-stone-200"
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
