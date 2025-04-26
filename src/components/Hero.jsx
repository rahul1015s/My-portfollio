import React from "react";
import { Download, Linkedin, Github } from "lucide-react";
import qqq from "../assets/qqq.jpg";

function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <section className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        {/* Text Content */}
        <div className="md:flex-1 space-y-6">
          <span className="font-mono text-blue-500 text-lg md:text-xl">
            Hello, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Rahul Verma
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-semibold">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-2xl">
            Self-taught developer passionate about creating beautiful,
            functional web experiences. Currently seeking opportunities to grow
            and contribute to meaningful projects.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 text-center"
              aria-label="Contact me"
              href="mailto:rahulwebjs@gmail.com"
            >
              Contact Me
            </a>

            <a
              href="/rv.pdf"
              download
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/20"
              aria-label="Download resume"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/rahul1015s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/rahul1015s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:flex-1 flex justify-center relative group">
          <div className="relative">
            <img
              src={qqq}
              alt="Rahul Verma"
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 shadow-inner animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
