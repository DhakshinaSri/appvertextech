import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCTA() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10 overflow-hidden bg-white border-t border-[#012D54]/10">
      {/* Structural visual anchor lines */}
      <div className="absolute left-6 md:left-16 lg:left-24 xl:left-32 top-0 bottom-0 w-px bg-linear-to-b from-[#114C5A]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto pl-4 md:pl-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#114C5A] block">NEXT STEPS</span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54] leading-tight">
            Ready to Accelerate Your Digital Transformation?
          </h3>
          <p className="text-sm md:text-base text-[#012D54]/75 font-medium leading-relaxed">
            Connect with our experienced technology professionals to discuss your strategic objectives, evaluate architectural opportunities, and design a customized framework engineered for your business growth.
          </p>
        </div>

        {/* Action Gateways Navigating to Contact Us */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto shrink-0">
          <Link to="/contact" className="flex-1 sm:flex-none">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-[#012D54] text-white text-sm font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-[#012D54]/20 hover:bg-[#114C5A] transition-colors duration-300 whitespace-nowrap"
            >
              Start Your Project
            </motion.button>
          </Link>
          
          <Link to="/contact" className="flex-1 sm:flex-none">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-transparent border-2 border-[#114C5A] text-[#114C5A] text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-[#114C5A] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}