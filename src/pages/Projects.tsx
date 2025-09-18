import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="min-h-screen p-4">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <div className="p-2 m-2 border border-gray-300 rounded">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div></div>
              <Link to={`/${project.link}`}>View Project</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
