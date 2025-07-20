import React, {useState} from 'react';
import { cname } from "@/lib/utils";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { set } from 'immutable';


const ContactMe = () => {
  const [formInputs, setFormInputs] = useState({});
  const [isSubmitting,setIsSubmitting]=useState(false);

  const serviceId=import.meta.env.VITE_SERVICE_ID;
  const templateId=import.meta.env.VITE_TEMPLATE_ID;
  const publicKey=import.meta.env.VITE_PUBLIC_KEY;

  const handleChange = (event) => {
    setFormInputs(values => ({...values, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    

    const templateParams={
      fromName:formInputs.name,
      fromEmail:formInputs.email,
      toName:'Reshma Ghanta',
      message:formInputs.message
    }

    // Send email using emailJS
    emailjs
    .send(serviceId, templateId, templateParams, publicKey).then((response) => {
        console.log('SUCCESS!',response);
        setFormInputs({})
        setTimeout(()=>{
          toast('Message Sent successfully!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
            setIsSubmitting(false);
      },1500)
        
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });

  }

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
              <form className='space-y-6 w-full max-w-md' onSubmit={handleSubmit}>
                    <div>
                          <label htmlFor='name'className='block text-md font-medium mb-3 mt-4'> Your Name</label>
                          <input type="text" id="name" name="name" required className='w-full px-5 py-4 rounded-md text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Enter your full name ...' value={formInputs.name ||"" }  onChange={handleChange}/>
                    
                          <label htmlFor='email'className='block text-md font-medium mb-3 mt-4'> Your Email</label>
                          <input type="email" id="email" name="email" required className='w-full px-5 py-4 rounded-md  text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='hello@gmail.com ...' value={formInputs.email || ""} onChange={handleChange}/>
                   
                          <label htmlFor='message'className='block text-md font-medium mb-3 mt-2'> Your Message</label>
                          <textarea  id="message" name="message" required className='w-full mb-6 px-5 py-4 rounded-md text-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Hello!! I would like to talk about ...' value={formInputs.message || ""} onChange={handleChange}/>
                   
                          <button type="submit" disabled={isSubmitting} className={cname("cosmic-button w-full flex items-center justify-center gap-2")}>
                           {isSubmitting? "Sending" :"Send Message"} <FiSend size={16}/>
                           </button>
                           <ToastContainer
                                  position="bottom-center"
                                  autoClose={5000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick={false}
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="light"
                                  
                          />
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