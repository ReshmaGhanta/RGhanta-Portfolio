import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className='py-24 px-4 relative'> 
    <div className='container mx-auto max-w-5xl font-bold mb-12 text-center'>
        <h2 className='text-4xl md:text-5xl'> About <span className='font-montserrat text-primary'> Me </span> </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 items-center gap-12">
        {/* Left Section (Image + Buttons) */}
        <div className="md:col-span-4 flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full border-4 border-purple-500 p-1 shadow-lg">
            <img
              src="/your-profile-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download Resume
              </a>
            </div>
        </div>

        {/* Right Section (Text) */}
        <div className="md:col-span-6 space-y-6">
         
          <ul className="font-opensans space-y-4 text-gray-300 text-xl">
            <li>👨‍💻 I'm a Software Engineer with 4+ years of experience in software and cloud technologies.</li>
            <li>🎓 Currently pursuing a BSc in Computer Science, I focus on building scalable solutions that matter.</li>
            <li>🛠️ From full-stack apps to cloud systems, I've led impactful, enterprise-level projects.</li>
            <li>🧰 I love automating workflows, optimizing systems, and turning ideas into results. 📈</li>
            <li>💡 Always curious. Always learning.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe