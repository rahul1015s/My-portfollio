import React from "react";
import { Mail, Linkedin, Phone, MessageSquare } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const FloatingContacts = () => {
  const { theme } = useTheme();

  return (
    <div className="hidden md:flex flex-col gap-6 fixed left-4 top-1/2 -translate-y-1/2 z-50 pb-20">
      {/* Email */}
      <a
        href="mailto:rahulwebjs@gmail.com"
        className={`p-2 rounded-full bg-background shadow-md hover:bg-primary transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <Mail size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/rahul1015s"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full bg-background shadow-md hover:bg-primary transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <Linkedin size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919135271562"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full bg-background shadow-md hover:bg-primary transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <MessageSquare size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:+919135271562"
        className={`p-2 rounded-full bg-background shadow-md hover:bg-primary transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContacts;
