import React from 'react';

const TechSkills = () => {
  const skills = [
    { name: 'JavaScript', icon: '/assets/react.svg' },
    { name: 'React.js', icon: '/assets/react.svg' },
    { name: 'Tailwind CSS', icon: '/assets/tailwindcss.png' },
    { name: 'Python', icon: '/assets/python.png' },
    { name: 'Java', icon: '/assets/java.png' },
    { name: 'MongoDB', icon: '/assets/mongodb.png' },
    { name: 'SQL', icon: '/assets/sql.png' },
    { name: 'HTML', icon: '/assets/html.png' },
    { name: 'CSS', icon: '/assets/css.png' }
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-white mb-4">My Tech Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-gray-800 rounded-full px-4 py-2 text-white">
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 mr-2" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
