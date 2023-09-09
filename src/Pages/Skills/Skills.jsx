import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { FaCode, FaReact, FaHtml5, FaCss3, FaNodeJs, FaJs } from 'react-icons/fa';
import './Skills.css'; // Import a CSS file for your styles (create this file if it doesn't exist)

const Skills = () => {
  const skills = [
    { id: 1, skill: 'JavaScript', level: 'Intermediate', icon: <FaJs /> },
    { id: 2, skill: 'React', level: 'Intermediate', icon: <FaReact /> },
    { id: 3, skill: 'HTML', level: 'Advanced', icon: <FaHtml5 /> },
    { id: 4, skill: 'CSS', level: 'Advanced', icon: <FaCss3 /> },
    { id: 5, skill: 'Node', level: 'Advanced', icon: <FaNodeJs /> },
    { id: 6, skill: 'Express', level: 'Intermediate', icon: <FaCode /> },
    // Add more skills with icons as needed
  ];

  return (
    <div>
      <SectionTitle title={'My Skills'}></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-card bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="text-center">
              <div className="text-2xl text-gray-800 mb-2">{skill.icon}</div>
              <h2 className="text-xl font-semibold">{skill.skill}</h2>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
