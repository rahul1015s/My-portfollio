import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {

  const {toggleTheme, theme} = useTheme();

  const navlinks = [
    { id: 1, label: "Home", href: '#home' },
    { id: 2, label: "About", href: '#about' },
    { id: 3, label: "Projects", href: '#projects' },
    { id: 4, label: "Skills", href: '#skills' },
    { id: 5, label: "Education", href: '#education' },
    { id: 6, label: "Contact", href: '#contact' },
  ];

  return (
    <nav 

    className="sticky  top-0 z-50  p-4 shadow-md flex items-center justify-between">
      <a 
          href='#home'
      className="text-2xl ml-6 font-bold font-logo text-blue-500">
        Portfolio
      </a>

      <ul className="gap-5 flex items-center justify-end text-xl">
        {navlinks.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
            </li>
        ))}
      </ul>
      <button
  onClick={toggleTheme}
 
>
  {theme === "dark" ? (
    <>
      <Sun size={30} /> 
    </>
  ) : (
    <>
      <Moon size={30} />
    </>
  )}
</button>

    </nav>
  );
};

export default Header;
