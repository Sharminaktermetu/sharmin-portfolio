import { useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
  console.log(projects);

  return (
    <div>
      <SectionTitle title={'My Projects'}></SectionTitle>
      <div className="overflow-x-auto bg-slate-200 p-10 rounded">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Project Image</th>
              <th>Live Link</th>
              <th>Git client code</th>
              <th>Git server code</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask w-24 h-32">
                        <img src={project.image_link} alt={project.project_name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link
                    to={project.live_link}
                    className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                      Live Link
                    </button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={project.git_client}
                    className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                      Git Client
                    </button>
                  </Link>
                </td>
                <td>
                  <Link
                    to={project.git_server}
                    className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                      Git Server
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Projects;
