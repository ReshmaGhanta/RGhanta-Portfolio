import React, {useState} from 'react'

const jobs = [
    {
      id: 1,
      title: "Sr.Full Stack Developer",
      company: "Covert Alert",
      location: "Indianpolis, IN",
      duration: "June 2020 - Present",
      project: "E911 Live",
      duties: [
        "5+ years of JavaScript/TypeScript experience",
        "Expertise with React ecosystem (Redux, Next.js, etc.)",
        "Experience with responsive design principles",
        "Familiarity with modern frontend build pipelines"
      ],
    },
    {
      id: 2,
      title: "Jr.Full Stack Developer",
      company: "Covert Alert",
      location: "Indianpolis, IN",
      duration: "July 2018 – June 2020",
      project: "911 Mapping System",
       duties: [
        "Strong experience with Node.js and Python",
        "Proficiency with database systems (SQL and NoSQL)",
        "Experience with Docker and Kubernetes",
        "Knowledge of cloud platforms (AWS, GCP, or Azure)"
      ],
    },
    {
      id: 3,
      title: "IT Developer",
      company: "George Mason University",
      location: "Fairfax, VA",
      duration: "Jan 2017 - May 2018",
      duties: [
        "Portfolio demonstrating UX process",
        "Proficiency with Figma and Adobe Creative Suite",
        "Experience conducting user research",
        "Understanding of accessibility standards"
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