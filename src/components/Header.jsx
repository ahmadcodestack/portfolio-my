import { FaMoon, FaSun } from 'react-icons/fa'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="fixed w-full dark:bg-primary/90 bg-white/90 z-50">
      <nav className="flex justify-between items-center py-8 px-10 lg:px-20">
        <a href="#" className="text-accent font-bold text-xl">Portfolio</a>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="dark:text-text hover:text-accent transition">About</a></li>
            <li><a href="#skills" className="dark:text-text hover:text-accent transition">Skills</a></li>
            <li><a href="#projects" className="dark:text-text hover:text-accent transition">Projects</a></li>
            <li><a href="#contact" className="dark:text-text hover:text-accent transition">Contact</a></li>
          </ul>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full dark:text-text hover:bg-secondary/50"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header