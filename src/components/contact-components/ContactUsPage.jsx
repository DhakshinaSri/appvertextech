import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactUsPage() {
  // Color Palette Reference Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White (Primary Canvas Base)
    milkyway: '#FFF9F0',  // Cream White
    galaxy: '#081F5C',    // Deep Midnight Blue (Heavy Typography)
    sky: '#D0E3FF',       // Airy Blue Accent
  };

  // Professional vertical entrance animation (strictly level)
  const faderUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const enquiryItems = [
    "Digital Transformation Consulting",
    "Enterprise Software Development",
    "Intelligent Automation Solutions",
    "Cloud & Infrastructure Services",
    "Data Analytics & Business Intelligence",
    "Cybersecurity & Governance",
    "Technology Partnerships",
    "Project Consultation"
  ];

  return (
    <main className="w-full min-h-screen select-none relative bg-white">
      
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/4 -right-40 w-150 h-150 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: colors.sky }}
        />
        <div 
          className="absolute bottom-1/4 -left-40 w-150 h-150 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          style={{ backgroundColor: colors.venus }}
        />
      </div>

      {/* --- SECTION 1: HEADER & PRIMARY CONTACT HUB --- */}
      <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Intro Title & Description (Top of the Form) */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <motion.span 
                variants={faderUp}
                className="inline-block text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full border"
                style={{ color: colors.planetary, borderColor: colors.universe }}
              >
                Global Connectivity
              </motion.span>
              <motion.h1 
                variants={faderUp}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none"
                style={{ color: colors.galaxy }}
              >
                Let's Build Something Extraordinary Together <br />
              </motion.h1>
            </div>

            <motion.div 
              variants={faderUp} 
              className="space-y-6 text-lg md:text-xl font-light leading-relaxed opacity-95" 
              style={{ color: colors.galaxy }}
            >
              <p>
                Whether you are planning a new digital product, modernizing existing systems, or seeking expert technology consulting, our team is ready to help transform your ideas into successful digital solutions.
              </p>
            </motion.div>
          </div>

          {/* Address & Hours (Left) + ContactForm (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Pillar: Typographical Details (Card-Free) */}
            <div className="lg:col-span-5 space-y-20">
              {/* Corporate Office */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.galaxy }}>
                  Corporate Office
                </h3>
                <div className="space-y-3 text-lg sm:text-xl font-medium leading-tight" style={{ color: colors.galaxy }}>
                  <p className="font-extrabold text-2xl" style={{ color: colors.planetary }}>App Vertex Tech</p>
                  <p className="opacity-80">Address</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.galaxy }}>
                  Business Hours
                </h3>
                <div className="space-y-6">
                  <div className="border-b pb-4" style={{ borderColor: 'rgba(8, 31, 92, 0.1)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Weekdays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
                  </div>
                  <div className="border-b pb-4" style={{ borderColor: 'rgba(8, 31, 92, 0.1)' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Saturdays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Saturday: 9:00 AM – 1:00 PM (IST)</p>
                  </div>
                  <div className="pb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: colors.planetary }}>Sundays</p>
                    <p className="text-lg font-medium" style={{ color: colors.galaxy }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillar: Native Contact Form Embed */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}