import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const canvasRef = useRef(null);

  // 3D Background Canvas Animation Loop (Visual continuity with Home)
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

  const coreValues = [
    {
      title: "Innovation",
      desc: "We continuously explore emerging technologies and creative ideas that deliver practical business solutions."
    },
    {
      title: "Integrity",
      desc: "Honesty, transparency, and ethical business practices form the foundation of every relationship we build."
    },
    {
      title: "Excellence",
      desc: "We pursue the highest standards of quality in everything we deliver."
    },
    {
      title: "Customer Success",
      desc: "Our clients' achievements define our success, and every solution we build is designed around their business objectives."
    },
    {
      title: "Collaboration",
      desc: "Strong teamwork and open communication enable us to deliver better solutions."
    },
    {
      title: "Continuous Learning",
      desc: "Technology evolves constantly, and so do we through continuous learning and innovation."
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-[#012D54] font-sans antialiased selection:bg-[#114C5A] selection:text-white">
      {/* Immersive Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-linear-to-br from-[rgba(20,76,90,0.03)] to-transparent rounded-tr-full pointer-events-none z-0" />

      {/* SECTION 1: EDITORIAL HERO & PHILOSOPHY */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10">
        {/* Structural Spine Line */}
        <div className="absolute left-6 md:left-16 lg:left-24 xl:left-32 top-0 bottom-0 w-px bg-linear-to-b from-[#012D54]/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl pl-4 md:pl-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-linear-to-r from-[#012D54] via-[#114C5A] to-[#012D54] mb-12">
              Creating<br />
              Technology That Makes Business Better
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 text-lg md:text-xl text-[#012D54]/90 font-medium leading-relaxed space-y-6"
            >
              <p>
                App Vertex Tech is a technology company dedicated to helping organizations leverage 
                digital innovation to achieve sustainable business growth. Since our inception, 
                we have remained committed to delivering high-quality software solutions that 
                combine functionality, security, performance, and exceptional user experience.
              </p>
              <p>
                Technology continues to redefine industries across the world. Organizations require 
                reliable partners who understand business challenges as well as technological 
                possibilities. Our experienced professionals collaborate closely with clients 
                to understand their goals, evaluate existing processes, and design customized 
                solutions that generate measurable business outcomes.
              </p>
            </motion.div>

            {/* Asymmetric Structural Callout Panel for Name Breakdown */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 bg-linear-to-br from-[rgba(20,76,90,0.03)] to-[rgba(1,45,84,0.03)] border-l-4 border-[#114C5A] p-8 rounded-r-xl relative"
            >
              <p className="text-base md:text-lg font-semibold text-[#012D54] leading-relaxed">
                Our name reflects our philosophy. "App" represents innovation through 
                applications, while "Vertex" symbolizes reaching the highest point of 
                technological excellence. Together, App Vertex Tech stands for building 
                intelligent digital solutions that elevate businesses to new heights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: END-TO-END CAPABILITY FOCUS */}
      <section className="relative py-24 px-6 md:px-16 lg:px-24 xl:px-32 z-10 bg-linear-to-b from-transparent via-[rgba(1,45,84,0.01)] to-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="w-12 h-0.5 bg-[#114C5A] mb-6" />
            <p className="text-xl md:text-2xl font-bold tracking-tight text-[#012D54] leading-snug">
              Our services cover every stage of the digital journey—from consulting and strategy 
              to design, development, implementation, integration, maintenance, and long-term 
              support. Every project is delivered using industry best practices, modern 
              technologies, and rigorous quality standards to ensure reliability, 
              scalability, and long-term value.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#012D54]/10 p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#114C5A]/5 rounded-bl-full pointer-events-none" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#114C5A] block mb-4">TARGET AUDIENCE</span>
            <p className="text-base md:text-lg text-[#012D54]/80 leading-relaxed font-medium">
              We proudly serve startups, educational institutions, healthcare providers, 
              manufacturing companies, financial organizations, retail businesses, government 
              agencies, and enterprises seeking innovative digital solutions.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE DUAL EMBLEM (MISSION & VISION CROSS-SECTION) */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative">
          
          {/* Subtle Vertical Split Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#114C5A]/20 via-[#012D54]/10 to-transparent" />

          {/* MISSION STRATUM */}
          <div className="lg:pr-16 space-y-8">
            <div className="flex items-baseline gap-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#012D54]">
                OUR MISSION
              </h2>
            </div>
            <div className="space-y-6 text-base md:text-lg text-[#012D54]/80 leading-relaxed font-medium">
              <p>
                Our mission is to empower businesses by delivering innovative, reliable, and 
                scalable technology solutions that simplify operations, improve customer 
                experiences, and accelerate digital transformation. We strive to build 
                applications that solve real business challenges while creating long-term value 
                for our clients, employees, and communities.
              </p>
              <p>
                We are committed to understanding each client's unique objectives and developing 
                customized solutions that combine creativity, technology, and strategic 
                thinking. Through continuous innovation, professional excellence, and 
                customer-focused service, we aim to become a trusted technology partner for 
                organizations across industries.
              </p>
            </div>
          </div>

          {/* VISION STRATUM */}
          <div className="lg:pl-16 space-y-8">
            <div className="flex items-baseline gap-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#012D54]">
                OUR VISION
              </h2>
            </div>
            <div className="space-y-6 text-base md:text-lg text-[#012D54]/80 leading-relaxed font-medium">
              <p>
                Our vision is to become a globally recognized technology company known for 
                delivering innovative software solutions that transform businesses and improve 
                lives. We aspire to lead digital innovation by embracing emerging technologies, 
                nurturing exceptional talent, and building long-lasting partnerships based on 
                trust, quality, and integrity.
              </p>
              <p>
                We envision a future where organizations of every size can confidently leverage 
                technology to unlock new opportunities, improve operational efficiency, and 
                remain competitive in an increasingly connected world.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: CORE VALUES GRID */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10">
        <div className="max-w-7xl w-full mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54]">
              OUR CORE VALUES
            </h2>
            <div className="w-24 h-1 bg-[#114C5A] mt-4" />
          </div>

          {/* Asymmetric Core Value Micro-Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#012D54]/10 p-8 rounded-xl hover:border-[#114C5A] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md relative overflow-hidden group"
              >
                {/* Visual Depth Card Block */}
                <div className="absolute -right-4 -bottom-4 text-7xl font-black font-mono text-[#012D54]/5 group-hover:text-[#114C5A]/10 transition-colors duration-300 select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#012D54] mb-4 group-hover:text-[#114C5A] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#012D54]/70 leading-relaxed font-medium relative z-10">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}