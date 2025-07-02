export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Dr. Raj Sharma',
    position: 'Professor, Computer Science Department',
    img: 'assets/review1.png',
    review:
      'Bibek is an exceptional student with impressive problem-solving skills. His work on web development projects demonstrates both technical proficiency and creative thinking. His attention to detail and ability to quickly grasp new concepts set him apart.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    position: 'Hackathon Judge, TechFest 2023',
    img: 'assets/review2.png',
    review:
      'Bibek\'s team project at our hackathon was remarkable. His contributions to the frontend and the overall architecture showed strong technical skills and excellent teamwork. He has a natural talent for creating intuitive user interfaces.',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    position: 'Project Mentor, College Innovation Lab',
    img: 'assets/review3.png',
    review:
      'I\'ve mentored Bibek on several projects, and I\'m consistently impressed by his dedication and skill. He approaches problems methodically and isn\'t afraid to explore new technologies. His MERN stack implementation for our lab project was particularly impressive.',
  },
  {
    id: 4,
    name: 'Ananya Desai',
    position: 'Teaching Assistant, Web Development Course',
    img: 'assets/review4.png',
    review:
      'As a TA, I\'ve observed Bibek\'s growth as a developer. He consistently delivers high-quality code and helps other students understand complex concepts. His ability to combine technical skills with clear communication makes him stand out among his peers.',
  },
];

export const myProjects = [
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Karasuno - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on real-time care, this leverages HTML, CSS, JavaScript, PHP, SQL, and GitHub to deliver responsive design, smart alerts, and actionable insights for continuous patient monitoring.',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'AI-powered Chatbot for Mental Health Detection',
    desc: 'Develop an emotionally intelligent AI chatbot with multimodal emotion detection, personalized memory-based responses, real-time crisis support, and end-to-end encrypted communication to ensure mental health monitoring and user data privacy.',
    subdesc:
      'Powered by TensorFlow, PyTorch, NLTK, OpenAI GPT, and Flask/Django, the chatbot ensures emotionally aware interactions, secure communication, and intelligent mental health insights tailored to individual users.',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'GraphLock - Graphical Password Authentication Interface',
    desc: 'GraphLock reimagines user authentication through image-based passwords. It enables users to create secure credentials by arranging images in a custom sequence using a drag-and-drop interface, offering a unique alternative to conventional text-based logins. With features like real-time validation and adjustable security levels, it blends usability with strong protection.',
    subdesc:
      'Built with Python, Tkinter, and GitHub, GraphLock brings together simplicity and security, making it ideal for educational demos, personal security tools, or research-driven authentication systems.',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    name: 'CodeCarnage 24-Hour Hackathon',
    pos: 'Backend Developer (Participant)',
    duration: 'April 2025 (11th-12th)',
    title: 'Collaborated in a high-pressure 24-hour hackathon organized by SJB Institute of Technology. Developed backend components for an innovative project, contributing to the team\'s solution under tight deadlines. Gained experience in rapid prototyping and teamwork.',
    icon: '/assets/hackathon.svg',
    animation: 'skill',
  },
];
