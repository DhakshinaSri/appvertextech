import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const canvasRef = useRef(null);

  // 3D Background Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        depth: Math.random() * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(20, 76, 90, 0.04)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx * (p.depth + 0.5);
        p.y += p.vy * (p.depth + 0.5);

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (p.depth + 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.depth > 1.2 ? 'rgba(1, 45, 84, 0.08)' : 'rgba(20, 76, 90, 0.12)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    "Mobile App Development",
    "Custom Software Development",
    "Web Application Development",
    "Enterprise Solutions",
    "Artificial Intelligence",
    "Cloud Solutions",
    "Cybersecurity",
    "UI/UX Design",
    "IT Consulting",
    "Digital Transformation"
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-[#012D54] font-sans antialiased selection:bg-[#114C5A] selection:text-white">
      {/* Immersive Background Elements */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-bl from-[rgba(20,76,90,0.04)] to-transparent rounded-bl-full pointer-events-none z-0" />
      
      {/* SECTION 1: HERO / VISION ENTRY */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-20 z-10 overflow-hidden">
        {/* Architectural Grid Line */}
        <div className="absolute left-6 md:left-16 lg:left-24 xl:left-32 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#114C5A]/20 via-[#012D54]/10 to-transparent pointer-events-none" />

        <div className="max-w-6xl pl-4 md:pl-10 relative">
          {/* Animated Kinetic Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 overflow-hidden"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#012D54] via-[#114C5A] to-[#012D54]">
              Building<br />
              Intelligent Applications.<br />
              Driving Digital Innovation.
            </h1>
          </motion.div>

          {/* Subheader Accent Split */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-4 my-10"
          >
            <div className="w-12 h-[2px] bg-[#114C5A]" />
            <h2 className="text-xl md:text-3xl font-bold tracking-wide uppercase text-[#114C5A]">
              Transforming<br />
              Ideas into Powerful Digital Solutions
            </h2>
          </motion.div>

          {/* Intro Core Content Narrative Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="max-w-3xl mt-6 text-base md:text-xl text-[#012D54]/80 leading-relaxed space-y-6 font-medium"
          >
            <p>
              In today's rapidly evolving digital landscape, businesses need more than just 
              technology—they need intelligent solutions that drive growth, improve 
              efficiency, and create exceptional customer experiences. At App Vertex Tech, 
              we specialize in designing, developing, and delivering innovative software 
              applications that help businesses embrace digital transformation with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES / DEEP DIVE */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10 bg-gradient-to-b from-transparent via-[rgba(20,76,90,0.02)] to-transparent">
        <div className="absolute right-6 md:right-16 lg:right-24 xl:right-32 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#114C5A]/10 to-[#012D54]/20 pointer-events-none" />
        
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Asymmetrical Info Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <div className="w-16 h-16 border-t-2 border-l-2 border-[#114C5A] opacity-60" />
            <p className="text-lg md:text-xl text-[#012D54] font-medium leading-relaxed">
              Our expertise spans mobile applications, web platforms, enterprise software, cloud 
              technologies, artificial intelligence, data analytics, cybersecurity, and business 
              automation. Whether you are a startup looking to launch your first product or a large 
              enterprise seeking digital modernization, our team combines technical expertise with 
              business insight to create scalable, secure, and future-ready solutions.
            </p>
          </div>

          {/* Interactive Vision Philosophy Column */}
          <div className="lg:col-span-7 lg:mt-32 relative bg-white/60 backdrop-blur-md border border-[#114C5A]/10 p-8 md:p-12 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500">
            <p className="text-xl md:text-2xl text-[#012D54] font-semibold leading-relaxed">
              We believe that every successful application begins with understanding the client's vision. 
              By combining creativity, technology, and strategic thinking, we develop solutions that not 
              only solve today's challenges but also prepare businesses for tomorrow's opportunities.
            </p>
            <div className="absolute bottom-4 right-4 text-6xl font-serif text-[#114C5A]/5 select-none font-bold">"</div>
          </div>

        </div>
      </section>

      {/* SECTION 3: MATRIX GRID SERVICES & ACTION CARDS */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto">
          
          {/* Section Typography Header & Integrated Navigation Block */}
          <div className="mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54] flex-grow">
              Our Services
            </h3>
            
            {/* Integrated Direct Link Navigation Trigger */}
            <Link to="/services">
              <motion.div 
                whileHover={{ x: 6 }}
                className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#114C5A] cursor-pointer"
              >
                <span>Explore Services Page</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.div>
            </Link>
          </div>

          {/* Non-Standard Modular Grid Array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white border border-[#012D54]/10 p-8 min-h-[70px] flex flex-col justify-between rounded-xl overflow-hidden hover:border-[#114C5A] transition-colors duration-300 shadow-sm"
              >
                <h4 className="text-xl font-bold tracking-tight text-[#012D54] group-hover:text-[#114C5A] transition-colors duration-300 mt-4">
                  {service}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Call To Action & Contact Page Gateway */}
          <div className="mt-32 pt-16 border-t border-[#012D54]/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#114C5A] mb-2">Let's connect and discuss your project</p>
              <h4 className="text-2xl font-bold text-[#012D54]">Start Your Project / Schedule a Consultation</h4>
            </div>

            {/* Link-Wrapped Interactive Actions */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link to="/services" className="flex-1 sm:flex-none">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#012D54] text-white text-sm font-bold tracking-wider uppercase rounded-lg shadow-lg shadow-[#012D54]/20 hover:bg-[#114C5A] transition-colors duration-300"
                >
                  Start Your Project
                </motion.button>
              </Link>
              
              <Link to="/contact" className="flex-1 sm:flex-none">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-transparent border-2 border-[#114C5A] text-[#114C5A] text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-[#114C5A] hover:text-white transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}