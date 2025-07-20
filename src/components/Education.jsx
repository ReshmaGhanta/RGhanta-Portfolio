import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import MasonLogo from '@/assets/MasonLogo.png';
import Jntuk from '@/assets/Jntuk-logo.png';
import { FaGraduationCap } from "react-icons/fa6";
import ImagesReusable from "@/reusableComponents/ImagesReusable";

const Education = () => {
  return (
    <section id="education" className='py-24 px-4 relative'> 
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-5xl mb-25 mt-15 text-center '> Educational  <span className='font-montserrat text-primary'> Background </span> </h2>
       
    <VerticalTimeline>
           <VerticalTimelineElement
                  className="vertical-timeline-element--education font-medium text-2xl font-opensans custom-timeline-ms"
                  date="2016 - 2018"
                  iconStyle={{ background: 'rgb(232, 154, 140)', color: '#fff' }}
                  icon={ <FaGraduationCap /> }
            >     
                  <div className="text-left space-y-2">
                        <h3 className="vertical-timeline-element-title font-montserrat text-2xl  text-black">Master of Science</h3>
                        <h4 className="vertical-timeline-element-title font-opensans text-xl text-primary"> Major: Information Systems</h4>
                        <h5 className="vertical-timeline-element-subtitle font-opensans text-lg   text-black">George Mason University -- Farifax,VA</h5>
                  </div>
   
            </VerticalTimelineElement>
            <VerticalTimelineElement
                      className="vertical-timeline-element--education font-medium text-lg custom-timeline-bs" 
                      date="2012 - 2016"
                      iconStyle={{ background: 'rgb(232, 154, 140)', color: '#fff' }}
                      icon={<FaGraduationCap />}  
            >
                    <div className="text-left space-y-2">
                          <h3 className="vertical-timeline-element-title font-montserrat text-2xl  text-black">Bachelor of Technology</h3>
                          <h4 className="vertical-timeline-element-title font-opensans text-xl text-primary">Major: Computer Science</h4>
                          <h5 className="vertical-timeline-element-subtitle font-opensans text-lg text-black">Jawaharlal Nehru Technological University, Kakinada, India</h5>
                    </div>
            </VerticalTimelineElement>
</VerticalTimeline>
    </div>
    </section>
  )
}

export default Education