import React from 'react'
import { BiSolidCertification } from "react-icons/bi";;

const Skills = () => {
  return <section id="skills" className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl mb-12 text-center'>
        <h2 className='text-4xl md:text-5xl mb-18'> Technical  <span className='font-montserrat text-primary'> Skills </span> </h2>

       
        
        <h3 className='text-3xl md:text-4xl mb-4 text-center '>  Licenses & <span className='font-montserrat text-primary'> Certifications </span> </h3>

        <div className='text-center flex flex-col items-center'>
        <ul className="font-opensans space-y-2 text-lg md:text-xl text-left text-muted-foreground max-2-2xl mx-auto font-normal">           
                <li className="flex items-center gap-2"><BiSolidCertification /> Certified Scrum Master</li>
                <li className="flex items-center gap-2"> <BiSolidCertification /> Oracle SE 8 Programmer I</li>
          </ul>
          </div>
     </div>
  </section>
}

export default Skills