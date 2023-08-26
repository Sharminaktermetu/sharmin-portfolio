import SectionTitle from "../../Shared/SectionTitle";
import { FaCode, FaReact, FaHtml5 } from 'react-icons/fa'; 


const Skills = () => {
   
    const skills = [
      { id: 1, skill: "JavaScript", level: "Advanced", icon: <FaCode /> },
      { id: 2, skill: "React", level: "Intermediate", icon: <FaReact /> },
      { id: 3, skill: "HTML", level: "Advanced", icon: <FaHtml5 /> },
      // Add more skills with icons as needed
    ];
    return (
        <div>
            <SectionTitle title={'My Skills'}></SectionTitle>
            <div className="grid gap-10 justify-center">
            {skills.map(skill=>(
                <div key={skill.id} className="stats shadow">
  
                <div className="stat">
                  <div className="stat-title">{skill.skill} {skill.icon}</div>
                  <div className="stat-value">{skill.level}</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
                
              </div>
            ))}
            </div>
           </div>
    );
};

export default Skills;