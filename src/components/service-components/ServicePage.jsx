import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const canvasRef = useRef(null);

  // 3D Background Canvas Animation Loop (Visual continuity with Home & About)
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

  const coreServices = [
    {
      title: "Custom Software Development",
      description: "Every business operates differently, and generic software often fails to address specific operational requirements. We develop customized software applications designed to streamline workflows, automate processes, improve productivity, and support business growth.",
      subtext: "Our development process emphasizes scalability, security, flexibility, and long-term maintainability, ensuring that every solution evolves alongside your organization.",
      label: "Solutions Include",
      items: ["Enterprise Applications", "ERP Systems", "CRM Solutions", "HR Management Systems", "Inventory Management Software", "Workflow Automation", "Business Portals", "API Development", "SaaS Applications", "Legacy Software Modernization"]
    },
    {
      title: "Mobile Application Development",
      description: "Mobile technology has transformed how businesses interact with customers, employees, and partners. Our mobile development team creates intuitive, secure, and feature-rich applications for Android and iOS platforms.",
      subtext: "Whether developing customer-facing applications, enterprise mobility solutions, healthcare applications, educational platforms, or e-commerce apps, we focus on delivering exceptional user experiences supported by robust technology.",
      label: "Our services include:",
      items: ["Native Android Applications", "Native iOS Applications", "Cross-Platform Applications", "Enterprise Mobile Solutions", "Healthcare Apps", "E-Commerce Apps", "Educational Apps", "Field Service Applications", "Mobile App Maintenance"]
    },
    {
      title: "Web Application Development",
      description: "We design and develop responsive, secure, and high-performance web applications that help organizations improve digital engagement and operational efficiency.",
      subtext: "Our web solutions are optimized for performance, accessibility, scalability, and seamless user experience across devices.",
      label: "Services include:",
      items: ["Corporate Websites", "Business Portals", "Customer Dashboards", "Learning Management Systems", "E-Commerce Platforms", "Booking Systems", "Web-Based ERP", "Progressive Web Applications"]
    },
    {
      title: "Artificial Intelligence Solutions",
      description: "Artificial intelligence enables organizations to automate processes, improve decision-making, and uncover valuable business insights.",
      subtext: "We help businesses integrate AI into their operations through intelligent solutions that enhance productivity, reduce manual effort, and improve customer engagement.",
      label: "Services include:",
      items: ["AI Consulting", "Machine Learning", "Predictive Analytics", "Intelligent Automation", "Chatbots", "Recommendation Systems", "Computer Vision", "Natural Language Processing"]
    },
    {
      title: "Cloud Solutions",
      description: "Modern businesses require flexible and scalable infrastructure. Our cloud services help organizations migrate, manage, and optimize cloud environments while ensuring high availability, security, and operational efficiency.",
      subtext: "",
      label: "Services include:",
      items: ["Cloud Migration", "Infrastructure Management", "Cloud Security", "DevOps", "Backup Solutions", "Disaster Recovery", "Cloud Monitoring", "Performance Optimization"]
    },
    {
      title: "Cybersecurity Services",
      description: "Protecting business data and digital assets is more important than ever. Our cybersecurity solutions help organizations strengthen security, identify vulnerabilities, and reduce cyber risks through proactive security strategies.",
      subtext: "",
      label: "Our expertise includes:",
      items: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Endpoint Protection", "Identity & Access Management", "Compliance Support", "Security Awareness Training", "Incident Response Planning"]
    },
    {
      title: "UI/UX Design",
      description: "Outstanding applications begin with exceptional user experiences. Our design team creates intuitive, visually appealing interfaces that improve usability and customer satisfaction.",
      subtext: "",
      label: "We focus on:",
      items: ["User Research", "Wireframing", "Interactive Prototypes", "Interface Design", "Mobile UI Design", "Dashboard Design", "Design Systems", "User Experience Optimization"]
    },
    {
      title: "IT Consulting",
      description: "We help organizations identify opportunities, improve IT strategies, optimize technology investments, and successfully execute digital transformation initiatives.",
      subtext: "Our consultants work closely with leadership teams to develop technology roadmaps aligned with business objectives.",
      label: "",
      items: []
    }
  ];

  const industries = ["Healthcare", "Banking & Financial Services", "Insurance", "Education", "Manufacturing", "Retail", "E-Commerce", "Logistics", "Real Estate", "Hospitality", "Government", "Information Technology", "Telecommunications", "Startups", "Professional Services"];
  const chooseUs = ["Experienced Technology Professionals", "Customer-Centric Development Approach", "Innovative Digital Solutions", "Transparent Project Management", "High Quality Standards", "Secure Development Practices", "Scalable Architecture", "Dedicated Technical Support", "Competitive Pricing", "Long-Term Business Partnership"];
  const process = ["Discovery & Consultation", "Requirement Analysis", "Solution Architecture", "UI/UX Design", "Agile Development", "Testing & Quality Assurance", "Deployment", "Training & Documentation", "Ongoing Support & Maintenance"];

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-[#012D54] font-sans antialiased selection:bg-[#114C5A] selection:text-white">
      {/* Background Matrix */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* SECTION 1: CORE CAPABILITIES CATALOG */}
      <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10">
        <div className="absolute left-6 md:left-16 lg:left-24 xl:left-32 top-0 bottom-0 w-px bg-linear-to-b from-[#114C5A]/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto pl-4 md:pl-10">
          <div className="mb-20">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#012D54] via-[#114C5A] to-[#012D54]">
              Our Services
            </h1>
            <div className="w-12 h-0.5 bg-[#114C5A] mt-4" />
          </div>

          {/* Asymmetrical Matrix Stack */}
          <div className="space-y-32">
            {coreServices.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
                
                {/* Visual Structural Index */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#012D54]">
                    {service.title}
                  </h2>
                </div>

                {/* Content Narrative & Sub-Items Blocks */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg md:text-xl text-[#012D54]/90 font-medium leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.subtext && (
                    <p className="text-base md:text-lg text-[#012D54]/70 font-medium leading-relaxed bg-[rgba(20,76,90,0.02)] p-6 border-l-2 border-[#114C5A]/40 rounded-r-lg">
                      {service.subtext}
                    </p>
                  )}

                  {service.items.length > 0 && (
                    <div className="pt-4">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#114C5A] block mb-4">{service.label}</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white border border-[#012D54]/10 px-4 py-3 rounded-lg shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#114C5A]" />
                            <span className="text-sm font-semibold text-[#012D54]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: INDUSTRIES WE SERVE */}
      <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10 bg-linear-to-b from-transparent via-[rgba(1,45,84,0.02)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54]">
              INDUSTRIES WE SERVE
            </h2>
            <div className="w-24 h-0.75 bg-[#114C5A] mt-4" />
          </div>

          {/* Minimalist Wrap Grid */}
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border border-[#012D54]/10 hover:border-[#114C5A] px-6 py-4 rounded-xl shadow-sm font-bold text-sm tracking-wide text-[#012D54] transition-colors duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE METRICS (WHY CHOOSE APP VERTEX TECH) */}
      <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54]">
              WHY CHOOSE APP VERTEX TECH
            </h2>
            <div className="w-24 h-0.75 bg-[#114C5A] mt-4" />
          </div>

          {/* Clean Dual-Axis Parameter Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chooseUs.map((reason, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -3 }}
                className="bg-white border border-[#012D54]/10 p-6 rounded-xl flex items-start gap-4 shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-[#114C5A] bg-[rgba(20,76,90,0.05)] px-2.5 py-1 rounded">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-[#012D54] leading-snug pt-0.5">
                  {reason}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PIPELINE PROCESS FLOW */}
      <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-24 z-10 bg-linear-to-t from-[rgba(20,76,90,0.02)] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#012D54]">
              OUR DEVELOPMENT PROCESS
            </h2>
            <div className="w-24 h-0.75 bg-[#114C5A] mt-4" />
          </div>

          {/* Sequential Stepper Network */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {process.map((step, index) => (
              <div key={index} className="group relative bg-white border border-[#012D54]/10 p-8 rounded-2xl shadow-sm hover:border-[#114C5A] transition-colors duration-300">
                <div className="absolute top-4 right-6 text-4xl font-black font-mono text-[#012D54]/5 group-hover:text-[#114C5A]/10 transition-colors duration-300 pointer-events-none select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#012D54]">
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}