import { useState } from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { smallProjectData } from "./projectsData"
import ProjectCategory from "./components/ProjectCategory";


function App() {
const [data, setData] = useState(smallProjectData);
const [btn, setBtn] = useState(0)

const projectUniqueCategory = ['all', ...new Set(smallProjectData.map( (projectBtn) => projectBtn.category))]

const setProjectData = (category, id) => {
  setBtn(id)

  if (category === 'all') {
    setData(smallProjectData)
    return;
  }

  const uniqueProject = smallProjectData.filter((project) => project.category === category)
  console.log(uniqueProject);
  setData(uniqueProject);

}


  return (
  <main>
    <Navbar/>
    <ProjectCategory 
    projectUniqueCategory = {projectUniqueCategory}
    setProjectData = {setProjectData}
    btn = {btn}
    />
    <Projects ProjectData = {data}/>
  </main>
  )
}

export default App
