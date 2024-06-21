import Card from "./Card"

function Projects() {
    return <>
        <section className="p-10 sm:p-32">
            <h1 className="text-4xl text-slate-700 font-bold">PROJECTS</h1>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-10">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    </>
}
export default Projects