import './index.css'; 
import { useEffect, useState } from "react"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Header from "./components/Header"
import Projects from "./components/Projects"
import CreateProject from "./components/CreateProject"

function App() {
  const student = {
    name: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    email: "student@hiof.no",
    experiences: [
		  { name: "Figma UI for customer X" },
		  { name: "Website for customer Y" }
	  ]
  }

  const initialProjects = [
    { title: "Prosjekt A" },
    { title: "Prosjekt B" }
  ];

  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    fetch('http://localhost:3999/projects')
      .then(response => response.json())
      .then(data => setProjects(prevProjects => [...prevProjects, ...data]))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const addProject = (newProject: { title: string }) => {
    setProjects([...projects, newProject]); 
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index)); 
  };

  const totalProjects = projects.length

  return (
	  <>
		  <Header student={student} />
      <main>
        <div id="main_container">
          <Experiences student={student} />
          <Projects projects={projects} removeProject={removeProject} totalProjects={totalProjects} />
          <CreateProject addProject={addProject} />
          <Contact student={student}/>
        </div>
      </main>
    </>
  )
}
export default App