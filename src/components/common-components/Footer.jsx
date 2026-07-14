import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesList = [
    { name: "Custom Software Development", path: "/services" },
    { name: "Mobile Application Development", path: "/services" },
    { name: "Web Application Development", path: "/services" },
    { name: "Artificial Intelligence Solutions", path: "/services" },
    { name: "Cloud Solutions", path: "/services" },
    { name: "Cybersecurity Services", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "IT Consulting", path: "/services" },
  ];

  return (
    <footer className="relative w-full bg-white text-[#012D54] font-sans antialiased border-t border-[#012D54]/10 z-20">
      {/* Decorative Grid Accent */}
      <div className="absolute right-6 md:right-16 lg:right-24 xl:right-32 top-0 bottom-0 w-px bg-linear-to-b from-[#114C5A]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        
        {/* UPPER MATRIX: TWO EQUAL MAIN COLUMNS SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-12 border-b border-[#012D54]/10">
          
          {/* Left Main Column: Brand Intro */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xl font-black tracking-tight text-[#012D54]">
              App Vertex Tech
            </h4>
            <p className="text-sm text-[#012D54]/70 leading-relaxed font-medium">
              Building intelligent digital solutions that elevate businesses to new heights. We specialize in designing, developing, and delivering innovative software applications.
            </p>
          </div>

          {/* Right Main Column: Content links matrix splitting quick links and two-column services */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Quick Links Column */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#114C5A] block uppercase">QUICK LINKS</span>
              <ul className="space-y-2.5">
                {menus.map((menu, idx) => (
                  <li key={idx}>
                    <Link to={menu.path}>
                      <motion.span 
                        whileHover={{ x: 4 }}
                        className="inline-block text-sm font-semibold text-[#012D54]/80 hover:text-[#114C5A] transition-colors duration-200 cursor-pointer"
                      >
                        {menu.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Main Sub-Column: Split internal items into two columns side by side */}
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#114C5A] block uppercase">OUR SERVICES</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {servicesList.map((service, idx) => (
                  <li key={idx}>
                    <Link to={service.path}>
                      <motion.span 
                        whileHover={{ x: 4 }}
                        className="inline-block text-sm font-semibold text-[#012D54]/80 hover:text-[#114C5A] transition-colors duration-200 cursor-pointer text-left"
                      >
                        {service.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* MIDDLE MATRIX: CONTACT INFO & BUSINESS HOURS SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12 border-b border-[#012D54]/10 text-sm font-medium">
          
          {/* Left Column: Address & Email Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#114C5A] block mb-1 uppercase">ADDRESS</span>
              <p className="text-[#012D54]/80 leading-relaxed">
                App Vertex Tech Address
              </p>
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#114C5A] block mb-1 uppercase">EMAIL COMMUNICATIONS</span>
              <a href="mailto:info@appvertextech.in" className="text-[#012D54]/80 hover:text-[#114C5A] transition-colors duration-200">
                info@appvertextech.in
              </a>
            </div>
          </div>

          {/* Right Column: Business Hours */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#114C5A] block mb-3 uppercase">BUSINESS HOURS</span>
            <div className="space-y-2 text-[#012D54]/80">
              <div className="flex justify-between max-w-xs border-b border-[#012D54]/5 pb-1">
                <span>Monday – Friday:</span>
                <span className="font-semibold text-[#012D54]">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs border-b border-[#012D54]/5 pb-1">
                <span>Saturday:</span>
                <span className="font-semibold text-[#012D54]">9:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs pb-1">
                <span>Sunday:</span>
                <span className="text-[#114C5A]/60 font-semibold">Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold text-[#012D54]/50">
          <div>
            &copy; {new Date().getFullYear()} APP VERTEX TECH. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-widest text-[10px] text-[#114C5A]/40">
            EXCELLENCE THROUGH INNOVATION
          </div>
        </div>

      </div>
    </footer>
  );
}