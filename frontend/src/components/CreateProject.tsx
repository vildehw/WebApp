import React, { useState, FormEvent } from 'react';

type CreateProjectProps = {
  addProject: (project: { id: string; title: string; createdAt: string; description: string }) => void;
};

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [projectData, setProjectData] = useState({
    title: '',
    createdAt: '',
    description: ''
  });

  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (!input) return;
    setProjectData(prevData => ({ ...prevData, title: input.value }));
  };

  const addProjectWithState = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, createdAt, description } = projectData;

    if (!title.trim()) return; 

    const newProject = {
      id: crypto.randomUUID(), 
      title,
      createdAt,
      description,
    };

    addProject(newProject); 

    setProjectData({
      title: '',
      createdAt: '',
      description: ''
    });
  };

  return (
    <section className="form_container">
      <h2 id="project_h2">New Project</h2>
      <p>Add a new project!</p>
      <form id="projectForm" onSubmit={addProjectWithState}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={projectData.title} onChange={updateTitle} />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="createdAt" value={projectData.createdAt} onChange={(e) => setProjectData(prevData => ({ ...prevData, createdAt: e.target.value }))} />
                
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows={4} cols={50} value={projectData.description} onChange={(e) => setProjectData(prevData => ({ ...prevData, description: e.target.value }))}></textarea>
        
        <button className="submit_button" type="submit">Submit</button>
      </form>
    </section>
  );
}
