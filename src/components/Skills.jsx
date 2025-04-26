import { Code2 } from 'lucide-react';

const Skills = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Redux', 'React Router'];
  const learningSkills = ['Node.js', 'Express.js', 'MongoDB'];

  return (
    <section 
      id="skills" 
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12"
    >
      <div className="max-w-5xl w-full text-center space-y-12">
        
        {/* Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Code2 className="w-10 h-10 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Here’s what I work with and what I'm currently learning to grow as a full-stack developer.
          </p>
        </div>

        {/* Skill Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

          {/* Frontend Skills Box */}
          <div 
            className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-black dark:border-white"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary text-left">Frontend Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-background opacity-90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Skills Box */}
          <div 
            className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-black dark:border-white"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary text-left">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              {learningSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-background opacity-90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
