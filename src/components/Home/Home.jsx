import bannerImg from "../../assets/banner.jpg";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="flex justify-center items-center">
      <div className="p-40 w-2/3 flex flex-col items-center justify-center text-center">
        <img src={bannerImg} className="rounded-full h-52 w-52" alt="" />
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
      </div>
    </section>
  );
}

export default Home;
