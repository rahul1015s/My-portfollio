import Header from "./components/Header"
import { ThemeProvider } from "../context/ThemeContext"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import FloatingContacts from "./components/FloatingContacts"
function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen [background-color:var(--bg)] [color:var(--text)] transition-colors duration-300">
        <Header />
        <FloatingContacts />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App
