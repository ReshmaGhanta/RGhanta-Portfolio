import React from 'react'
import { ArrowDown } from "lucide-react";

const HomePage = () => {
  return (
    <section id="home" className='relative min-h-screen flex flex-col items-center justify-center px-4'> 
    <div className="container max-w-4xl mx-auto text-center z-10">
         <div className='space-y-6'>
               <h1 className='font-montserrat text-4xl md:text-6xl font-bold tracking-tight'>
                  <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                  <span className='text-primary opacity-0 animate-fade-in-delay-1'>Reshma </span>
                  <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Ghanta</span>
               </h1>
               <p className='font-opensans text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                 A passionate software engineer who loves turning ideas into clean, powerful code. I thrive on solving real-world problems, exploring new technologies, and building cool things that make an impact. 💻✨
              </p>
         </div> 
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="font-opensans text-md text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}

export default HomePage