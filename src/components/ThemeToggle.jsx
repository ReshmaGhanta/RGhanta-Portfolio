import { Sun, Moon } from 'lucide-react';
import React, {useState,useEffect}from 'react'
import { cname } from "@/lib/utils";

const ThemeToggle = () => {
      const [isDarkMode,setIsDarkMode] = useState(false);

      useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
          setIsDarkMode(true);
          document.documentElement.classList.add("dark");
        } else {
          localStorage.setItem("theme", "light");
          setIsDarkMode(false);
        }
      }, []);

      const toggleTheme = () =>{
           if(isDarkMode){
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                setIsDarkMode(false);
                window.dispatchEvent(new Event("theme-changed"));
           }else{
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setIsDarkMode(true);
                window.dispatchEvent(new Event("theme-changed"));
           }
      }
      
  return <button onClick={toggleTheme} className={cname("fixed max-sm:hidden top-15 right-10 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}>
    {isDarkMode ? <Sun className='h-6 w-6 text-silver-300'/> : <Moon className='h-6 w-6 text-blue-900'/> }</button>
}

export default ThemeToggle