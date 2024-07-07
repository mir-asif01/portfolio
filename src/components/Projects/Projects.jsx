import Card from "./Card";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "E REPAIR SHOP",
      img: p1,
      client_code: "https://github.com/mir-asif01/e_repair_shop-client",
      live: "https://recipe-app-4be44.web.app/",
    },
    {
      id: 2,
      name: "PRO TASK",
      img: p2,
      client_code: "https://github.com/mir-asif01/pro_task_frontend",
      live: "https://pro-task-ed52c.web.app/",
    },
    {
      id: 3,
      name: "PROJECTILE",
      img: p3,
      client_code: "https://github.com/mir-asif01/projectile-frontend",
      live: "https://projectileas.netlify.app/",
    },
  ];

  return (
    <>
      <section id="projects" className="p-10 sm:p-32">
        <h1 className="text-4xl text-slate-700 font-bold">TOP PROJECTS</h1>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-10">
          {projectsData.map((prj) => (
            <Card key={prj.id} prj={prj} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Projects;
