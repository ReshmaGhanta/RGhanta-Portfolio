import React from 'react';
import { cname } from "@/lib/utils";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";



const ContactMe = () => {

  function openEmail(){
    window.open('mailto:reshma.ghanta@gmail.com');
}


  return (
    <section id="contact" className='py-24 px-4 relative'> 
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-5xl mb-4 text-center'> Let's Get In <span className='font-montserrat text-primary'> Touch </span> </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Open to new opportunities where I can learn, contribute, and grow. Feel free to reach out.
        </p>

     
 <div className="flex justify-center">
           <div className="bg-card p-10 rounded-xl shadow-md  w-full max-w-2xl flex items-center justify-center">
              <form className='space-y-6 w-full max-w-md'>
                    <div>
                          <label htmlFor='name'className='block text-md font-medium mb-3 mt-4'> Your Name</label>
                          <input type="text" id="name" name="name" required className='w-full px-5 py-4 rounded-md text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Enter your full name ...'/>
                    
                          <label htmlFor='email'className='block text-md font-medium mb-3 mt-4'> Your Email</label>
                          <input type="email" id="email" name="email" required className='w-full px-5 py-4 rounded-md  text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='appleseed@gmail.com ...'/>
                   
                          <label htmlFor='message'className='block text-md font-medium mb-3 mt-2'> Your Message</label>
                          <textarea  id="message" name="message" required className='w-full mb-6 px-5 py-4 rounded-md text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Hello!! I like to talk about ...'/>
                   
                          <button type="submit" className={cname("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <FiSend size={16}/>
                           {/* <Send size={16}></Send> */}
                           </button>
                    </div>
              </form>
              </div>
        </div>
        <div className="pt-8">
              <h4 className="font-medium text-lg mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/rghanta2/" target="_blank">
                  <FaLinkedin size={35}/>
                </a>
                <a onClick={openEmail}target="_blank">
                  <MdOutlineEmail size={35}/>
                </a>
                <a href="https://discord.gg/GRtKhHXCKy" target="_blank">
                   <FaDiscord size={35}/>
                </a>
                <a href="https://github.com/ReshmaGhanta" target="_blank">
                    <FaGithub size={35} />
                </a>
              </div>
          </div>
        </div>
    </section>
  )
}

export default ContactMe