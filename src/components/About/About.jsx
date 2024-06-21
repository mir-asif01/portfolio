import ab1 from "../../assets/ab-1.gif"
import ab2 from "../../assets/ab-2.gif"
import ab3 from "../../assets/ab-3.gif"
import ab4 from "../../assets/ab-4.gif"
function About() {
    return <>
        <section id="about" className="mt-10 pb-20 px-10 sm:px-32 flex flex-col gap-10 sm:flex-row justify-center items-center">
            <div className="sm:w-1/2">
                <h1 className="text-4xl font-bold text-slate-700 mb-3">ABOUT ME</h1>
                <p className="text-slate-700 text-justify">It has been 2+ years since I started learning and building projects. Through this journey I have faced so many errors and bugs and most important that I solved them and learned from them. <span className="font-semibold">I believe building something is the best way to learn something.<span /></span></p>
                <h1 className="mt-2 font-semibold text-xl text-slate-700 uppercase">I prefer working hard until I found the maximum result.</h1>
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
        </section>
    </>
}
export default About