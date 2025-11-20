import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { 
    number: '01', 
    title: 'Strategy', 
    subtitle: 'Branding & Goal System', 
    detail: 'We define your vision and market position with data-backed planning.',
    color: 'text-blue-600' // Blue Accent
  },
  { 
    number: '02', 
    title: 'Prototype', 
    subtitle: 'Wireframes & Flow', 
    detail: 'We build the structural foundation with low-fidelity prototypes.',
    color: 'text-blue-600' // Blue Accent
  },
  { 
    number: '03', 
    title: 'Design', 
    subtitle: 'High-Fidelity Visuals', 
    detail: 'The full design version, visual concepts, and high-fidelity mockups.',
    color: 'bg-blue-600 text-white' // Highlighted block uses solid BLUE
  },
  { 
    number: '04', 
    title: 'Delivery', 
    subtitle: 'Development & Launch', 
    detail: 'Project finalization, development, rigorous testing, and market launch.',
    color: 'text-zinc-700' // Dark text for final step
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const blockRefs = useRef([]);
  const headlineRef = useRef(null);

  useEffect(() => {
    // 1. Headline Animation
    gsap.fromTo(headlineRef.current.children, 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
        }
      }
    );

    // 2. Staggered slide-in animation for the main process blocks
    blockRefs.current.forEach((el, index) => {
      const isDesignBlock = index === 2;
      
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: isDesignBlock ? 'back.out(1.7)' : 'power3.out',
          delay: index * 0.2, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      // Subtle 3D hover/pop effect
      gsap.set(el, { transformPerspective: 600 });
      el.addEventListener('mouseenter', () => {
        // Hover shadow is Blue
        gsap.to(el, { scale: 1.03, z: 20, duration: 0.3, ease: 'power2.out', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }); 
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { scale: 1, z: 0, duration: 0.3, ease: 'power2.out', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' });
      });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-screen font-[EXO] overflow-hidden bg-zinc-100 text-[#1a1a1a] py-32" 
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Designer's Headline Anchor (Why Us?) --- */}
        <div ref={headlineRef} className="text-center mb-20">
          <p className="text-md uppercase tracking-[5px] text-zinc-700 mb-2 font-semibold">Our Value Proposition</p>
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-[#1a1a1a] mb-4">
            Why We Are <span className="text-blue-600">Different.</span> {/* BLUE ACCENT */}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-4xl mx-auto">
            Our success is built on a four-stage system, ensuring every step from conceptualization to launch is handled with **measurable precision and high-fidelity execution**.
          </p>
        </div>

        {/* --- Animated Process Timeline Blocks --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const isDesignBlock = index === 2;
            // The highlight block is solid blue; others are white
            const blockClass = isDesignBlock 
              ? `p-8 rounded-xl ${step.color} shadow-2xl shadow-blue-500/30` 
              : `p-8 rounded-xl bg-white border border-zinc-200 shadow-md`; 

            return (
              <div
                key={index}
                ref={el => (blockRefs.current[index] = el)}
                className={`flex flex-col h-[280px] transition-all duration-300 opacity-0 ${blockClass}`}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-5xl font-light ${isDesignBlock ? 'text-white/80' : 'text-zinc-300'}`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDesignBlock ? 'bg-white/10' : 'bg-blue-500/10'}`}>
                    {/* The small circle color is blue */}
                    <span className={`text-xs font-bold ${isDesignBlock ? 'text-white' : 'text-blue-600'}`}>{step.number}</span> 
                  </div>
                </div>
                
                <h3 className={`text-3xl font-extrabold mb-1 ${isDesignBlock ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm mb-4 font-semibold ${isDesignBlock ? 'text-white/70' : 'text-zinc-600'}`}>
                  {step.subtitle}
                </p>
                <p className={`text-sm mt-auto ${isDesignBlock ? 'text-white/90' : 'text-zinc-500'}`}>
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* --- Closing CTA --- */}
        <div className="mt-16 text-center">
             <button className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/50 font-bold uppercase tracking-wider">
                View Detailed Methodology
            </button>
        </div>
       
      </div>
    </section>
  );
};

export default WhyUs;