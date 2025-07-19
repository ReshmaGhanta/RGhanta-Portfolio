import React from 'react';
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return(
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
            <div className="text-center max-w-6xl mx-auto ">
            <p className="text-lg text-muted-foreground ">
              Designed & Developed By Reshma Ghanta.  &copy; {new Date().getFullYear()} 
            </p>
            </div>
      <a href="#home"   className="fixed bottom-6 right-6 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md" >
          <ArrowUp size={20} />
       </a>
</footer>
);
}

export default Footer