import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb } from 'react-icons/si'

const skills = [
  { icon: <FaReact size={50} />, name: 'React' },
  { icon: <SiJavascript size={50} />, name: 'JavaScript' },
  { icon: <FaNodeJs size={50} />, name: 'Node.js' },
  { icon: <SiTailwindcss size={50} />, name: 'Tailwind' },
  { icon: <SiMongodb size={50} />, name: 'MongoDB' },
  { icon: <FaGitAlt size={50} />, name: 'Git' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10 lg:px-20 bg-secondary">
      <h2 className="section-title relative inline-block">
        My Skills
        <span className="absolute bottom-[-10px] left-0 w-[100px] h-[2px] bg-accent"></span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4 p-6 hover:bg-primary/50 rounded-lg transition">
            <div className="text-accent">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills