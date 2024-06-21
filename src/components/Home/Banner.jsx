import bannerImg from "../../assets/banner.jpg"
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Banner() {
    return <>
        <section id="home" className="flex flex-col justify-between sm:pb-16 sm:px-20 items-center sm:flex-row sm:justify-stretch">
            <div className="p-10 sm:w-1/3">
                <h1 className="text-3xl sm:text-4xl sm:mb-4 font-bold text-slate-700">MIR KAMRUL AHSAN ASIF</h1>
                <h1 className="font-bold text-slate-700">WEB DEVElOPER | MERN | JAVASCRIPT</h1>
                <p className="mt-2 text-slate-700">I'm Mir Kamrul Ahsan Asif. I'm a Junior Full Stack Web Developer(MERN) based in Bogra,BANGLADESH. I am very passionate about building web applications and turning my ideas into reality.</p>
                <div className="flex justify-center items-center gap-5 mt-5">
                    <a target="_blank" href="https://github.com/mir-asif01"><FaGithub className="text-5xl" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mir-kamrul-ahsan-asif-7a19a62b7/"><FaLinkedin className="text-5xl" /></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61554728202989"><FaFacebook className="text-5xl" /></a>
                    <a target="_blank" href="https://x.com/mir_asif000111"><FaTwitter className="text-5xl" /></a>
                </div>
            </div>
            <div className="p-10 sm:w-1/3">
                <img src={bannerImg} className="rounded-tl-full rounded-tr-full" alt="" />
            </div>
            <div className="p-10 sm:w-1/3">
                <div>
                    <h1 className="text-slate-700 text-4xl font-bold">SKILLS</h1>
                    <p className="text-slate-700 mt-2">I'm comfortable in these tools and technologies.Always keen to learn and build with new tools and technologies.</p>
                </div>
                <div>
                    <ul className="grid grid-cols-4 gap-5 mt-10 justify-center">
                        <li><FaHtml5 className="text-5xl" /></li>
                        <li><FaCss3 className="text-5xl" /></li>
                        <li><IoLogoJavascript className="text-5xl" /></li>
                        <li><FaReact className="text-5xl" /></li>
                        <li><RiTailwindCssFill className="text-5xl" /></li>
                        <li><SiFirebase className="text-5xl" /></li>
                        <li><SiExpress className="text-5xl" /></li>
                        <li><FaNodeJs className="text-5xl" /></li>
                        <li><SiMongodb className="text-5xl" /></li>
                        <li><FaGitAlt className="text-5xl" /></li>
                        <li><FaGithub className="text-5xl" /></li>
                        <li><VscVscode className="text-5xl" /></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}

export default Banner