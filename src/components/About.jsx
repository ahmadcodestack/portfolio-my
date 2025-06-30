const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind', 
    'Git', 'Python', 'MongoDB', 'Express', 'Firebase'
  ]

  return (
    <section id="about" className="py-20 px-10 lg:px-20">
      <h2 className="section-title relative inline-block">
        About Me
        <span className="absolute bottom-[-10px] left-0 w-[100px] h-[2px] bg-accent"></span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <p className="text-text-secondary mb-6">
            Hello! I'm [Your Name], a passionate developer with experience in building web applications.
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          <p className="text-text-secondary mb-6">
            My goal is to always build products that provide pixel-perfect, performant experiences.
          </p>
          <p className="text-text-secondary mb-6">
            Here are a few technologies I've been working with recently:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-accent">▹</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative w-[300px] h-[300px] border-2 border-accent rounded">
            {/* Placeholder for your image */}
            <div className="absolute top-4 left-4 w-full h-full bg-secondary rounded z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About