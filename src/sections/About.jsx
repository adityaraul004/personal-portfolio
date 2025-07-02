import { useState } from 'react';
// Remove Globe import since we're not using it anymore
// import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import TechSkills from '../components/TechSkills.jsx';

// Add animation style for toast
const animationStyle = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  .animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out forwards;
  }
`;

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [showResumeToast, setShowResumeToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bibekbhandari9848@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleResumeClick = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to place your resume file in the public directory
    link.download = 'resume.pdf'; // The name that will be used when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="c-space my-20" id="about">
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      {showResumeToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fade-in-down">
          Resume coming soon! Check back later.
        </div>
      )}

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Aditya Narayan Raul</p>
              <p className="grid-subtext">
              "Computer Science Engineering student (2022–2026) at CMR Institute of Technology, Bangalore. 
              I'm a passionate Data Analyst and Web Developer, skilled in creating responsive web apps and working on AI-powered projects.
              </p>
              <button
                onClick={handleResumeClick}
                className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with JavaScript, Python, MongoDB, React.js, HTML, CSS, Java, SQL. I'm proficient
                with Tailwind CSS for modern UI design. Also familiar with data structures & algorithms, AWS basics, and
                basic DevOps.
              </p>
              <TechSkills />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center bg-gray-800">
              {/* Using the user's actual photo */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-blue-500">
                  <img src="/assets/myphoto.jpg" alt="Aditya Narayan Raul" className="w-full h-full object-cover" />
                </div>
                <p className="text-white mt-4 font-medium text-lg">Bangalore, India</p>
              </div>
            </div>
            <div>
              <p className="grid-headtext">Location & Availability</p>
              <p className="grid-subtext">
                I&apos;m based in Bangalore, India and open to internship, jobs and collaboration opportunities.
              </p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              A highly motivated and detail-oriented Computer Science graduate with strong analytical skills and 
              a passion for software development. Proficient in Python and Java, with experience in building web applications. 
              Looking for an opportunity to apply technical and problem-solving skills in a dynamic work environment.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  rauladitya1234@gmail.com
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/adityaraul004" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-raul-5929b4259"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/aditya_r_04" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
