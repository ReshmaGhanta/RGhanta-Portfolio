import React, { useState, useEffect } from 'react';
import {cname} from "@/lib/utils";
import ImagesReusable from "@/reusableComponents/ImagesReusable";
import LightLogo from "@/assets/RG_Logo_Light.png";
import DarkLogo from "@/assets/RG_Logo_Dark.png";
import { Menu, X } from "lucide-react";

const navList=[
    {name:"Home", href:"#home"},
    {name:"About", href:"#about"},
    {name:"Skills", href:"#skills"},
    {name:"Experience", href:"#experience"},
    {name:"Education", href:"#education"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#contact"}
]
const Navbar = () => {
    const [isScrolled,setIsScrolled]= useState(false);
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") ||"light");
    const [isMenuOpen,setIsMenuOpen]=useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
        const updatedTheme = localStorage.getItem("theme");
        setCurrentTheme(updatedTheme);
      };

      window.addEventListener("theme-changed", handleThemeChange);
      return () => window.removeEventListener("theme-changed", handleThemeChange);
  }, []);

    useEffect(()=>{
        const handleScroll= () => {
             setIsScrolled(window.screenY>10)
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[]);

  return <nav className={cname("fixed w-full z-40 transition-all duration-300",
     isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
  )}> 
      <div className='container flex items-center justify-between'>
        <a className='flex items-center' href="#home">
            <span className='relative z-10'>
               <ImagesReusable data={{ source: currentTheme === "dark" ? DarkLogo : LightLogo, avatar: "Avatar", customStyle:"h-10 w-auto"}}></ImagesReusable>
             </span>
        </a>
        {/* Desktop nav bar */}
         <div className="hidden md:flex space-x-8">
          {navList.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-xl text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div> 
        {/* Mobile nav bar */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}{" "}
        </button>

          <div className={cname("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none")}>

          <div className="flex flex-col space-y-8 text-xl">
          {navList.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-xl text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={()=>setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div> 
          </div>
      </div>
  </nav>
}

export default Navbar