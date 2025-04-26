import { GraduationCap } from 'lucide-react';
import { useState } from 'react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('self-taught');

  const selfTaught = [
    "Learned HTML, CSS, JavaScript, TailwindCSS from YouTube and Google",
    "Completed course from Udemy (React - The Complete Guide)",
    "Followed interactive tutorials on freeCodeCamp",
    "Built real-world projects to sharpen practical skills 🚀"
  ];

  const traditional = [
    "Graduated with a Bachelor's degree in Art History (Hons.)",
    "Learned critical thinking, research methodology, and creativity through arts",
    "University Life helped me develop discipline, curiosity, and passion for self-learning"
  ];

  return (
    <section id="education" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full space-y-12">

        {/* Heading */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <GraduationCap className="w-10 h-10 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            Here's my self-taught journey and traditional academic background.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setActiveTab('self-taught')}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium border transition-all
              ${activeTab === 'self-taught' 
                ? 'bg-primary text-background border-primary'
                : 'border-black dark:border-white text-foreground hover:bg-primary hover:text-background'}
              ${activeTab === 'self-taught' 
                ? 'active:bg-primary dark:active:bg-white active:border-primary' 
                : 'hover:border-primary dark:hover:border-white'}
            `}
          >
            Self Taught
          </button>
          <button
            onClick={() => setActiveTab('traditional')}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium border transition-all
              ${activeTab === 'traditional' 
                ? 'bg-primary text-background border-primary'
                : 'border-black dark:border-white text-foreground hover:bg-primary hover:text-background'}
              ${activeTab === 'traditional' 
                ? 'active:bg-primary dark:active:bg-white active:border-primary' 
                : 'hover:border-primary dark:hover:border-white'}
            `}
          >
            Traditional Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-10">

          {/* Self-Taught Tab */}
          {activeTab === 'self-taught' && (
            <div className="rounded-2xl p-8 shadow-lg border border-black dark:border-white space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Self Taught Learning</h3>
              <ul className="list-disc list-inside text-lg space-y-2 opacity-90">
                {selfTaught.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Traditional Education Tab */}
          {activeTab === 'traditional' && (
            <div className="rounded-2xl p-8 shadow-lg border border-black dark:border-white space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Traditional Education</h3>
              <ul className="list-disc list-inside text-lg space-y-2 opacity-90">
                {traditional.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Education;
