
import React, { useState } from 'react';
import './AddProject.css';

const AddProject = ({ onAddProject, projects  }) => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();


    const newProject = {
      name: projectName,
      link: projectLink,
      description: description,
    };

   
    onAddProject(newProject);

   
    setProjectName('');
    setProjectLink('');
    setDescription('');

    
localStorage.setItem('projects', JSON.stringify([...projects, newProject]));

  };

  return (
    <div className='add-project-cont'>
      <h1 className='add-heading'>Add Project</h1>
      <form onSubmit={handleAddProject}>
            <div className='input-cont'>
                <label forHTML="projectname">Project Name :</label>
                <input
                    type='text'
                    placeholder='Project Name'
                    className='input-field'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
            </div>
            <div className='input-cont'>
                <label forHTML="projectlink">Project Link :</label>
                <input
                    type='text'
                    placeholder='Project Link'
                    className='input-field'
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    required
                />
            </div>
            <div className='input-cont'>
                <label forHTML="description">Description :</label>
                <textarea
                    placeholder='Project Description'
                    className='input-field'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
        
       
        
        <div className='button-cont'>
          <button type="submit" className='add-button'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
