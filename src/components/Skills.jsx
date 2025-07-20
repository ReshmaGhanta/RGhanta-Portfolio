import React from 'react'
import { BiSolidCertification } from "react-icons/bi";;
import "./../index.css"
import ImagesReusable from "@/reusableComponents/ImagesReusable";
import Marquee from 'react-fast-marquee';
import Java from "@/assets/skills/java.png";
import NodeJs from "@/assets/skills/nodejs.png";
import ExpressJs from "@/assets/skills/ExpressJs.png";
import Javascript from "@/assets/skills/Javascript.png";
import ReactJs from "@/assets/skills/React.png";
import Html from "@/assets/skills/Html.png";
import Css from "@/assets/skills/css.png";
import jQuery from "@/assets/skills/jQuery.png";
import Npm from "@/assets/skills/Npm.png";
import SocketIo from "@/assets/skills/SocketIo.png";
import Bootstrap from "@/assets/skills/bootstrap.png";
import Firebase from "@/assets/skills/firebase.png";
import Oracle from "@/assets/skills/Oracle.png";
/* import Vercel from "@/assets/skills/vercel.png"; */


const skills = [
  { name: 'Java', source: Java },
  { name: 'Node Js', source: NodeJs },
  { name: 'Express Js', source: ExpressJs },
  { name: 'JavaScript', source: Javascript },
  { name: 'React Js', source: ReactJs },
  { name: 'Html', source: Html },
  { name: 'Css', source: Css },
  { name: 'jQuery', source: jQuery },
  { name: 'Npm', source: Npm },
  { name: 'Socket.io', source: SocketIo },
  { name: 'Bootstrap', source: Bootstrap },
  { name: 'Firebase', source: Firebase },
  { name: 'Oracle', source: Oracle },
];


const Skills = () => {
  return <section id="skills" className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl mb-15 mt-24  text-center'>
        <h2 className='text-4xl md:text-5xl mb-20'> Technical  <span className='font-montserrat text-primary'> Skills </span> </h2>
    </div>
   
    <div class="relative overflow-hidden w-11/12 mx-auto py-6 ">
    <Marquee speed={125} pauseOnHover={true}>
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center mx-15">
            <ImagesReusable
              data={{
                source: skill.source,
                avatar: skill.name,
                customStyle: 'h-30 w-30 mb-4',
              }}
            />
            <span className="uppercase text-lg font-medium bg-gray-800 text-white px-3 py-1 rounded">
              {skill.name}
            </span>
          </div>
        ))}
      </Marquee>
      </div>





      {/* <div className="logos">
      <div className="scroll-slide">
      <div className="slide">
      <ImagesReusable data={{ source: SheCodes, avatar: "Avatar", customStyle:"h-50 w-50 "}}></ImagesReusable>
      <span>Java</span>
        </div>
        
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Next.js</span>
        <span>
          Spring Boot</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MySQL</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>Unit Testing</span>
        <span>Data structures</span>
      </div>
      <div className="scroll-slide">
        <span>Java</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Next.js</span>
        <span>Spring Boot</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MySQL</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>Unit Testing</span>
        <span>Data structures</span>
      </div>
    </div> */}
        
        <h3 className='text-3xl md:text-4xl mb-4 mt-35 text-center '>  Licenses & <span className='font-montserrat text-primary'> Certifications </span> </h3>

        <div className='text-center flex flex-col items-center'>
        <ul className="font-opensans space-y-2 text-lg md:text-xl text-left text-muted-foreground max-2-2xl mx-auto font-normal">           
                <li className="flex items-center gap-2"><BiSolidCertification /> Certified Scrum Master</li>
                <li className="flex items-center gap-2"> <BiSolidCertification /> Oracle SE 8 Programmer I</li>
          </ul>
          </div>
     {/* </div> */}
  </section>
}

export default Skills