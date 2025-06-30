import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-10 px-10 lg:px-20 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition">
          <FaTwitter size={24} />
        </a>
      </div>
      
      <p className="text-text-secondary text-sm">
        Designed & Built by Your Name
      </p>
    </footer>
  )
}

export default Footer