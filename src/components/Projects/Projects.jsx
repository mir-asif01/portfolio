import Card from "./Card"
import p3 from "../../assets/p3.png"
import p2 from "../../assets/p2.png"
import poster_app from "../../assets/poster_app.png"

function Projects() {
  const projectsData = [
    {
      id: 1,
      name: "Poster, a modern blog sharing platform",
      img: poster_app,
      client_code: "https://github.com/mir-asif01/poster_app_fontend",
      server_code: "https://github.com/mir-asif01/poster_app-backend",
      live: "https://poster-app-fontend.vercel.app/",
      features: [
        `User authentication implemented to ensure secure blogging. Users can create an account with profile image and cover image.`,
        `CRUD operations were implemented using NodeJS and ExpressJS and as a database MongoDB was integrated also to store data. Users can create posts, read posts, like posts and add comments to posts.`,
        `Mongodb aggregation pipeline is used to integrate data for profile pages. Users can edit and delete posts they have added from their profile page. Users can also visit the post creator's profile from the read page`,
      ],
      techs: `ReactJS, TailwindCSS, Firebase, NodeJS, ExpressJS, Mongoose(ODM)`,
    },
    {
      id: 2,
      name: "ProTask a kanban style task manager",
      img: p2,
      client_code: "https://github.com/mir-asif01/pro_task_frontend",
      server_code: "https://github.com/mir-asif01/pro_task_backend",
      live: "https://pro-task-ed52c.web.app/",
      features: [
        `User authentication using firebase. Users can create an account using email,password
       and also can login using their google and github accounts. Users' information will be
     displayed in the profile route after login.`,
        `CRUD operations were implemented using NodeJS and ExpressJS and as a database
MongoDB was integrated also to store data. Users can create a new task , see, edit and
delete tasks from their tasks dashboard.`,
        `In the task board page I have implemented the drag and drop feature to shuffle the
previously added tasks between three categories (to-do,ongoing and completed). The drag
and drop feature is completely synced with the database , meaning when a user drag and
drop task from one list to another the action will be saved in the database.`,
      ],
      techs: `ReactJS, TailwindCSS, Firebase, NodeJS, ExpressJS, Mongoose(ODM)`,
    },
    {
      id: 3,
      name: "Projectile a simple project manager",
      img: p3,
      client_code: "https://github.com/mir-asif01/projectile-frontend",
      server_code: "https://github.com/mir-asif01/projectile-backend",
      live: "https://projectileas.netlify.app/",
      features: [
        `User authentication implemented using only NodeJS,ExpressJS and MongoDB. Users can
upload their profile image while registration. Users can login to the website using email
and password they previously registered with.`,
        `After logging in users can navigate to the projects page where they will see two routes on
the left to see all projects they are involved with and create a new project option. In the
create new project page users will be allowed to create new projects and team members in
it.`,
        `In the all projects page users will see the projects they created and the projects they are
members of. In the details page of the project only the creator will be able to add tasks.
And the members and creator can add comments to the project.`,
      ],
      techs: `ReactJS, TailwindCSS, Firebase, NodeJS, ExpressJS, MongoDB`,
    },
  ]

  return (
    <>
      <section id="projects" className="p-7 md:px-32">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center mb-5">
          <h1 className="text-3xl underline text-slate-700 font-bold">
            Top Projects
          </h1>
          <a
            href="https://github.com/mir-asif01"
            target="_blank"
            className="text-blue-500 underline text-xl"
          >
            See more projects on my github
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          {projectsData.map((prj) => (
            <Card key={prj.id} prj={prj} />
          ))}
        </div>
      </section>
    </>
  )
}
export default Projects
