const projects = [
  {
    title: "Project 1",
    description: "A web application built with React and Node.js that helps users manage their tasks efficiently.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with secure payment integration and product management system.",
    tags: ["Next.js", "Stripe", "Firebase"],
  },
  {
    title: "Project 3",
    description: "A real-time chat application with authentication and multimedia support.",
    tags: ["Socket.io", "React", "Express"],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 lg:px-20">
      <h2 className="section-title relative inline-block">
        My Projects
        <span className="absolute bottom-[-10px] left-0 w-[100px] h-[2px] bg-accent"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-text-secondary mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-primary/50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects