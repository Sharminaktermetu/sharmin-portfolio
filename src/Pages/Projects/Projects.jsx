import { useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { useState } from "react";
import { Link } from "react-router-dom";


const Projects = () => {
  const [projects,setProjects]=useState([])
  useEffect(()=>{
    fetch('projects.json')
    .then(res=>res.json())
    .then(data=>setProjects(data))
  },[])
  console.log(projects);
    return (
        <div>
          <SectionTitle title={'My Projects'}></SectionTitle>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      {projects.map(project=>( <tr key={project.id}>
       
       <td>
         <div className="flex items-center space-x-3">
           <div className="avatar">
             <div className="mask w-24 h-32">
               <img src={project.image_link}/>
             </div>
           </div>
           
         </div>
       </td>

       <td className="text-blue-500"><Link to={project.live_link}>Live link</Link></td>
       <td className="text-blue-500"><Link to={project.git_client}>Git Client</Link></td>
       <td className="text-blue-500"><Link to={project.git_server}>Git Server</Link></td>

     </tr>))}


    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default Projects;