import React from "react";
import { Mail, Linkedin, Phone, MessageSquare } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // <-- import your theme context

const Contact = () => {
  const { theme } = useTheme(); // <-- get current theme

  return (
    <section id="contact" className="py-16 px-8 md:px-20 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Contact Me</h2>
        <p className={`mb-12 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          Feel free to reach out through any of the following platforms:
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* Email */}
          <a
            href="mailto:rahulwebjs@gmail.com"
            className={`flex items-center gap-4 text-xl ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            } hover:text-primary transition-colors duration-300`}
          >
            <Mail size={28} />
            rahulwebjs@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rahul1015s"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 text-xl ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            } hover:text-primary transition-colors duration-300`}
          >
            <Linkedin size={28} />
            LinkedIn Profile
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919135271562"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 text-xl ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            } hover:text-primary transition-colors duration-300`}
          >
            <MessageSquare size={28} />
            Chat on WhatsApp
          </a>

          {/* Phone */}
          <a
            href="tel:+919135271562"
            className={`flex items-center gap-4 text-xl ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            } hover:text-primary transition-colors duration-300`}
          >
            <Phone size={28} />
            +91 9135271562
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
