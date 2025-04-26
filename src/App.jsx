import Header from "./components/Header"
import { ThemeProvider } from "../context/ThemeContext"
import Hero from "./components/Hero"
function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen [background-color:var(--bg)] [color:var(--text)] transition-colors duration-300">
        <Header />
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App
