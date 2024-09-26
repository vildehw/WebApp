
type Project = {
  id?: number;
  title: string;
  description?: string;
  category?: string;
  createdAt?: string;
};

type ProjectsProps = {
  projects: Project[];
  removeProject: (index: number) => void;
  totalProjects: number; 
};

export default function Projects({ projects, removeProject, totalProjects }: ProjectsProps) {
  return (
    <>
      <h2>My projects ({totalProjects} total)</h2>
      <section id="article_container">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <article key={index}>
              <img src="placeholder.jpeg" alt={project.title}></img>
              <div className="article_content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <button className="close-button" onClick={() => removeProject(index)}>X</button>
            </article>
          ))
        ) : (
          <p>Ingen prosjekter</p>
        )}
      </section>
    </>
  );
}
