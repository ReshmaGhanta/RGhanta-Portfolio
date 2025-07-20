import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Background from '@/components/Background';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Footer  from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
            <ThemeToggle/>

        {/* Background Effects */}
            <Background/>

        {/* Navbar */}
            <Navbar/>

        {/* Main Content */}
            <main>
                <HomePage/>
                <AboutMe/>
                <Skills/>
                <Experience/>
                <Education/>
               {/*  <Projects/> */}
                <ContactMe/>
            </main>

        {/* Footer */}
                 <Footer />
    </div>
  )
}

export default Home