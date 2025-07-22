import React, {useState} from 'react'

const jobs = [
    {
      id: 1,
      title: "Sr. Full Stack Developer",
      company: "Covert Alert",
      location: "Indianpolis, IN",
      duration: "June 2020 - Present",
      project: "E911 Live",
      duties: [
        "Led the development of a real-time emergency mapping platform using React.js, Node.js, and Firebase—enabling seamless user–first responder communication through location tracking, live video (AWS Kinesis), and audio (AWS IVS) streaming.",
        "Engineered a discreet voice-activated system for emergency activation and automatic media recording, leveraging customizable commands for user safety.",
        "Integrated Mapbox and external GPS receiver software, boosting location accuracy and system performance by 70%, with geofencing logic improving operational reach by 200%.",
        "Optimized real-time data flow between users and responders using Socket.io and Firebase rules, reducing latency by 80% and enforcing strict data separation and integrity.",
        "Built secure 2FA workflows using Firebase MFA (mobile) and Nodemailer (email), enhancing authentication reliability.",
        "Collaborated with cross-functional teams and stakeholders, including first responders and UX designers, aligning features with operational needs and onboarding two universities.",
        "Mentored interns, facilitated Agile ceremonies as a Certified Scrum Master (CSM), and authored HLD/LLD documentation to accelerate team velocity and delivery."
      ],
    },
    {
      id: 2,
      title: "Jr. Full Stack Developer",
      company: "Covert Alert",
      location: "Indianpolis, IN",
      duration: "July 2018 – June 2020",
      project: "911 Mapping System",
       duties: [
        "Built a full-stack emergency response application using HTML, CSS, JavaScript (frontend) and Node.js, Express.js, Firebase (backend) with real-time data sync.",
        "Implemented an interactive mapping interface with Google Maps API, enabling precise geolocation and visual tracking.",
        "Integrated Amazon Kinesis Video Streams to fetch and display real-time video feeds, enhancing situational awareness.",
        "Developed voice-guided navigation using the Speech Synthesis API, improving accessibility for first responders.",
        "Delivered and demoed the pilot system to first responders, iterated with 4 major improvements based on real-world feedback.",
        "Engineered county-based geofencing; addressed jurisdiction overlap challenges that laid the groundwork for the E911 Live system evolution."
      ],
    },
    {
      id: 3,
      title: "IT Developer",
      company: "George Mason University",
      location: "Fairfax, VA",
      duration: "Jan 2017 - May 2018",
      duties: [
        "Designed and developed a responsive web portal for the Computer Science department using HTML, CSS, and JavaScript, featuring a dynamic, user-friendly survey interface.",
        "Enhanced UX with real-time updates using AJAX and JSON for asynchronous form data population and submission.",
        "Implemented secure user authentication and session management via Java servlets and cookies, ensuring reliable state handling.",
        "Improved UI/UX with jQuery-driven tooltips and tabbed navigation, enabling intuitive, event-based interactions.",
        "Built a scalable, modular web app using Java, JSP, and AJAX, deployed on Apache Tomcat with robust JDBC-based database connectivity.",
        "Led low-level design and module ownership, ensuring clean, maintainable architecture and high-performance components.",
        "Contributed across the SDLC in an Agile environment, following Test-Driven Development (TDD) to maintain code quality and reliability."
      ],
      
    },
  ];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(jobs[0]);

  const handleJobClick = (id) => {
    setSelectedExperience(id);
  };
  return (
    <section id="experience" className='py-24 px-4 relative bg-gradient-to-br'> 
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-5xl mb-18 mt-15 text-center font-montserrat'> Work  <span className='font-montserrat text-primary'> Experience </span> </h2>

       <div className="min-h-screen bg-gradient-to-br ">
          <div className="flex flex-col md:flex-row gap-6 bg-card rounded-2xl shadow-xl p-6">

            {/* Experience Column */}
            <div className="w-full md:w-2/5 bg-card rounded-xl animate-fadeIn px-6 py-6 overflow-y-auto">
                {jobs.map((job) => (
                  <div 
                    key={job.id}
                    onClick={() => handleJobClick(job)}
                    className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 
                    ${
                      selectedExperience?.id === job.id 
                        ? 'bg-blue-50/50 border-l-4 border-primary shadow-sm' 
                        : 'bg-card hover:bg-blue-50/30'
                    }`}
                    >
                    <h3 className="font-montserrat text-2xl font-bold">
                    {job.title}</h3>
                   <h5 className="font-montserrat text-xl  text-primary">  {job.company} </h5>
                  </div>
                ))}
              </div>

            
            {/* Duties Column */}
            <div className="w-full md:w-3/5 bg-card rounded-xl  p-6">
              {selectedExperience && (
                  <div className="animate-fadeIn">
                      <div className="space-y-2 mb-8">
                          <h2 className="font-montserrat text-3xl font-bold text-left">{selectedExperience.title} — <span className="text-primary text-2xl font-normal"> {selectedExperience.company} </span></h2>
                          <p className="text-primary text-xl text-left">{selectedExperience.location}</p>
                         <p className="text-lg text-muted-foreground text-left">{selectedExperience.duration}</p>
                      </div>
              
                      <p className="text-xl text-muted-foreground text-left text-primary">Project Name: {selectedExperience.project}</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {selectedExperience.duties.map((req, index) => (
                        <li key={index} className="text-left text-lg font-opensans text-muted-foreground">
                             {req}
                        </li>
                      ))}
                    </ul>
                  </div>
              )}
            </div>

          </div>
      </div>
    
        </div>
    </section>
  )
}

export default Experience