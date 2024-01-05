import React,{useState,useEffect} from 'react'
import './App.css';

import Header from '../src/components/Header/Header';
import About from '../src/components/About/About';
import AddProject from '../src/components/AddProject/AddProject';
import Project from '../src/components/Project/Project'
import Contact from '../src/components/Contact/Contact';

function App() {
  const initialProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    
    
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
 
  return (
    <div className="App">
      <Header />
      <About />
      <AddProject onAddProject={addProject} projects={projects} />
      <Project projects={projects} />
      <Contact />
      <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1704431772/Vector_adwan0.png" alt="" className='img'/>
    </div>
  );
}

export default App;
