
import ProjectsCard from "./ProjectsCard";

const Projects = ({ProjectData}) => {

//console.log(data);
  
  return (
   <section className = "section-projects">
    <div className = "projects-container">
    {ProjectData.map( (project) => <ProjectsCard key={project.id} {...project}/>
    )}
    </div>
   </section>
  )
}

export default Projects
