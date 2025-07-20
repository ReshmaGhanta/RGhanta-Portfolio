import React from 'react'
import ImagesReusable from "@/reusableComponents/ImagesReusable";
import SheCodes from "@/assets/sheCodes.png";
import ReshmaResume from "@/assets/ReshmaGhantaResume.pdf"

const AboutMe = () => {
  function openResume(){
    window.open(ReshmaResume);
}
  return (
    <section id="about" className='py-24 px-4 relative'> 
    <div className='container mx-auto max-w-5xl  mb-12 text-center'>
        <h2 className='text-4xl md:text-5xl mt-15 mb-18'> A Little bit <span className='font-montserrat text-primary'> About Me </span> </h2>
       
        <div className="max-w-7xl mx-auto space-y-6 grid grid-cols-1 md:grid-cols-12 items-center gap-12">
       
        {/* Left Section (Image + Buttons) */}
        <div className="md:col-span-4 flex flex-col items-center space-y-6">
         
          {/* Profile Image */}
           <div className="w-48 h-48 rounded-full border-4 p-1 shadow-lg" style={{ borderColor: '#ff9587' }} >
          <span className='relative z-10'> 

               <ImagesReusable data={{ source: SheCodes, avatar: "Avatar", customStyle:"h-full w-full object-cover rounded-full"}}></ImagesReusable>
             </span>
           </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a onClick={openResume} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                 Resume
              </a>
            </div>
        </div>

        {/* Right Section (Text) */}
        <div className="md:col-span-8 space-y-6">
         
          <ul className="font-opensans space-y-6 text-lg md:text-xl text-left text-muted-foreground max-2-2xl mx-auto font-normal">           
                <li><span className="mr-5">👩‍💻</span>I'm an experienced Software Engineer with 8+ years of hands-on experience building scalable full-stack applications.</li>
                <li><span className="mr-5">🧠</span> Deeply invested in mastering system design and cloud architecture patterns to design robust, high-performance distributed systems.</li>
                <li><span className="mr-5"> 🎯 </span> Strong problem-solving skills with a dedicated focus on mastering data structures and algorithms to craft efficient, optimized solutions.</li>
                <li> <span className="mr-5">📚</span> Lifelong learner — always eager to upgrade my skills by exploring cutting-edge technologies, frameworks and best practices.</li>
                <li><span className="mr-5">💡</span> Driven by curiosity, commitment to code quality and passionate about building solutions that make a difference.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe