import { Github, ExternalLink, Briefcase, UserCircle } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const personalProjects = [
    {
      title: "AtoZ Market",
      description: "A complete e-commerce platform with authentication, cart, and payments.",
      tech: ["React","React Router","RTK Query","SwiperJS" , "TailwindCSS", "Firebase (Authentication, Firestore, Newsletter)"],
      demo: "https://atoz-market.vercel.app/",
      code: "https://github.com/rahul1015s/AtoZ-market",
    },
    {
      title: "Quiz App",
      description: "Fun and interactive quiz application with dynamic questions.",
      tech: ["React", "TailwindCSS", "React Router"],
      demo: "https://qquiz-app.vercel.app/",
      code: "https://github.com/rahul1015s/QuizApp",
    },
    {
      title: "FoodieCall",
      description: "Food delivery UI and backend design for practice.",
      tech: ["React", "TailwindCSS"],
      demo: "#",
      code: "https://github.com/rahul1015s/FoodieCall",
    }
  ];

  const freelanceProjects = [
    {
      title: "Carryzo",
      description: "A modern courier and logistics service platform.",
      tech: ["Next.js", "TailwindCSS", "Node.js"],
      demo: "https://carryzo.in/",
      client: "Carryzo Logistics",
    }
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <div key={index} className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-border">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm px-3 py-1 rounded-full bg-primary text-background opacity-90"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink size={18} />
                Live
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <Github size={18} />
                Code
              </a>
            )}
            {project.client && (
              <span className="flex items-center gap-2 text-primary text-sm">
                <Briefcase size={18} />
                {project.client}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 mt-24">
    <div className="max-w-6xl w-full text-center space-y-12">
      {/* Heading */}
      <div className="flex flex-col items-center space-y-4">
        <UserCircle className="w-10 h-10 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </div>
  
      {/* Tabs */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-6 py-2 rounded-full font-medium transition-all 
            ${activeTab === 'personal' 
              ? 'bg-primary text-background border-2 border-primary' 
              : 'border border-primary text-primary hover:bg-primary hover:text-background'} 
            hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary`}
        >
          Personal Projects
        </button>
        <button
          onClick={() => setActiveTab('freelance')}
          className={`px-6 py-2 rounded-full font-medium transition-all 
            ${activeTab === 'freelance' 
              ? 'bg-primary text-background border-2 border-primary' 
              : 'border border-primary text-primary hover:bg-primary hover:text-background'} 
            hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary`}
        >
          Freelance Work
        </button>
      </div>
  
      {/* Projects Grid */}
      {activeTab === 'personal' ? renderProjects(personalProjects) : renderProjects(freelanceProjects)}
    </div>
  </section>
  
  );
};

export default Projects;
