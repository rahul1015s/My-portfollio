import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, ArrowLeft } from "lucide-react";

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { id: 1, label: "Home", href: '#home' },
    { id: 2, label: "About", href: '#about' },
    { id: 3, label: "Projects", href: '#projects' },
    { id: 4, label: "Skills", href: '#skills' },
    { id: 5, label: "Education", href: '#education' },
    { id: 6, label: "Contact", href: '#contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 p-4 bg-background/50 backdrop-blur-md shadow-md flex items-center justify-between transition-all duration-300 ease-in-out">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl md:ml-6 font-bold font-logo text-primary hover:text-secondary transition-colors duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="gap-8 flex items-center text-lg font-medium">
            {navlinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  } hover:text-primary transition-colors duration-300`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent hover:bg-primary transition-colors duration-300"
          >
            {theme === "dark" ? (
              <Sun size={24} className="text-yellow-500" />
            ) : (
              <Moon size={24} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-transparent hover:bg-primary transition-colors duration-300"
          >
            {theme === "dark" ? (
              <Sun size={24} className="text-yellow-500" />
            ) : (
              <Moon size={24} className="text-gray-800" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full bg-transparent hover:bg-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} className={theme === "dark" ? "text-gray-100" : "text-gray-800"} />
          </button>
        </div>
      </nav>

      {/* Mobile FullScreen Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 flex flex-col transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}>
          {/* Top Bar */}
          <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <button
  onClick={() => setIsMenuOpen(false)}
  className={`flex items-center gap-2 ${
    theme === "dark" ? "text-gray-100" : "text-gray-900"
  } hover:text-primary transition-colors duration-300`}
>
  <ArrowLeft size={20} />
  <span className="font-medium">Close</span>
</button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-transparent hover:bg-primary transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun size={24} className="text-yellow-500" />
              ) : (
                <Moon size={24} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col justify-center items-center flex-grow space-y-8 text-center">
            {navlinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  } hover:text-primary transition-colors duration-300`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
