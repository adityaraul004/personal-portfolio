import React from 'react';

const IconFullStack = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-400">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
  </svg>
);

const IconBackend = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-400">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const IconDatabase = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-400">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const IconSystemDesign = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400">
    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"></path>
  </svg>
);

const IconDevOps = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-cyan-400">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const IconMicroservices = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-red-400">
    <path d="M16 16L22 12L16 8"></path>
    <path d="M8 8L2 12L8 16"></path>
    <path d="M19 12H5"></path>
  </svg>
);

const TechnicalSkills = () => {
  const skills = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description:
        'Building end-to-end web applications, handling both frontend and backend, ensuring seamless user experience and functionality.',
      icon: <IconFullStack />,
    },
    {
      id: 2,
      title: 'Backend Development',
      description:
        'Designing scalable and efficient server-side logic, handling APIs, authentication, and database operations for seamless functionality.',
      icon: <IconBackend />,
    },
    {
      id: 3,
      title: 'Database Management',
      description:
        'Designing, optimizing, and managing databases to store and retrieve data efficiently, ensuring high availability and performance.',
      icon: <IconDatabase />,
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      description:
        'Implementing efficient solutions using optimized data structures and algorithms for solving complex computational problems and improving performance.',
      icon: <IconSystemDesign />,
    },
    {
      id: 5,
      title: 'Cloud & DevOps',
      description:
        'Automating deployment, scaling, and monitoring using cloud platforms, CI/CD pipelines, and infrastructure as code.',
      icon: <IconDevOps />,
    },
    {
      id: 6,
      title: 'Machine Learning',
      description:
        'Developing simple ML models for classification, regression, and prediction tasks. Familiar with fundamental algorithms and libraries like scikit-learn for data analysis and modeling.',
      icon: <IconMicroservices />,
    },
  ];

  return (
    <section className="c-space my-20">
      <h3 className="head-text">TECHNICAL SKILLS</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{skill.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
