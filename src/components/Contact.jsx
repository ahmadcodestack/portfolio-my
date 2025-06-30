const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 lg:px-20 bg-secondary">
      <h2 className="section-title relative inline-block">
        Get In Touch
        <span className="absolute bottom-[-10px] left-0 w-[100px] h-[2px] bg-accent"></span>
      </h2>
      
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-text-secondary mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:your.email@example.com" 
          className="btn border-accent text-accent hover:bg-accent/10 inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact