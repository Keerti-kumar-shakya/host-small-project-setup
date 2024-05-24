import React from 'react';


const ProjectCategory = ({projectUniqueCategory, setProjectData, btn}) => {



  console.log(projectUniqueCategory);
  return (
   <section className='project-btn-category-section'>
      <div className="project-btn-container">
        {projectUniqueCategory.map( (btnCategory, index) => <button className= {`btn ${index === btn? 'active-btn': 'null'}`}
        key={btnCategory}
        onClick={() => setProjectData(btnCategory, index)}
        >
          {btnCategory}
          </button>
          )}
          
      </div>
      <hr />
   </section>
  )
}

export default ProjectCategory
