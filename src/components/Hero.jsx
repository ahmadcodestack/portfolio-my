const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-10 lg:px-20">
      <p className="text-accent mb-4">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold dark:text-text mb-4">Your Name</h1>
      <h2 className="text-4xl md:text-6xl font-bold dark:text-text-secondary mb-6">I build things for the web.</h2>
      
      <p className="text-text-secondary max-w-2xl mb-8">
        I'm a software developer specializing in building exceptional digital experiences. 
        Currently focused on building accessible, human-centered products.
      </p>
      
      <a href="#contact" className="btn border-accent text-accent hover:bg-accent/10 w-fit">
        Get In Touch
      </a>
    </section>
  )
}

export default Hero