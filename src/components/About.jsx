import { User } from 'lucide-react';

const About = () => {
  const skills = ['React', 'TailwindCSS', 'JavaScript', 'Node.js', 'Express', 'Redux'];

  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full space-y-12">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        {/* Bio */}
        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Hey! I'm <span className="font-semibold text-primary">Rahul Verma</span>, a self-taught web developer passionate about building clean, responsive, and user-friendly web applications.
          </p>
          <p>
            My journey began with pure curiosity for technology. Over time, I taught myself modern web development technologies like React, TailwindCSS, and Node.js, constantly leveling up my skills.
          </p>
          <p>
            Right now, I'm focused on full-stack development — building powerful, scalable solutions while ensuring excellent code quality and a smooth user experience.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies I Work With:</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-background"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
