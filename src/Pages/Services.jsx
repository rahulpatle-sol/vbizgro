import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    title: 'Strategic Consulting & Research',
    description: 'We dive deep into audience and market data to craft custom, unshakeable strategies. Our insights are blueprints for market domination.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200',
    color: 'text-blue-600', 
  },
  {
    title: 'Performance Marketing & ROAS',
    description: 'Conversion-focused campaigns across all channels. We optimize every dollar for maximum Return on Ad Spend and sustainable growth.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022aa2?q=80&w=1200',
    color: 'text-blue-600', 
  },
  {
    title: 'Brand Identity & Visual Systems',
    description: 'We build holistic brand identities. From motion graphics to custom typography, your visual system will be unforgettable and instantly recognizable.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e7e8c5f9c4e?q=80&w=1200',
    color: 'text-blue-600', 
  },
  {
    title: 'Content Creation & Storytelling',
    description: 'Scroll-stopping content that connects. We handle production, scripting, and multi-platform distribution, ensuring your story hits the right audience at the perfect moment.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200',
    color: 'text-blue-600', 
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for Staggered Slide-In
    cardRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    
    // Headline animation on scroll
    gsap.fromTo(sectionRef.current.querySelector('.service-headline'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-screen font-[EXO] py-32 overflow-hidden bg-zinc-100 text-[#1a1a1a]"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-12 max-w-7xl">
        
        {/* --- Premium Headline (Animated) --- */}
        <div className="text-center mb-28 service-headline">
          <p className="text-md uppercase tracking-[5px] text-blue-600 mb-2 font-semibold opacity-0">Our Signature Capabilities</p>
          <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-[#1a1a1a] opacity-0">
            What We <span className="text-blue-600">Master.</span>
          </h2>
          <p className="text-xl text-zinc-600 mt-4 max-w-3xl mx-auto opacity-0">
            Bespoke digital architecture built with strategic precision and high-fidelity design.
          </p>
        </div>

        {/* --- Premium Alternating Service Cards (Main Content) --- */}
        <div className="flex flex-col space-y-36">
          {serviceData.map((service, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 p-4 md:p-0 
                          ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Media Section (Large Image) */}
              <div className={`w-full lg:w-3/5 relative h-[450px] overflow-hidden 
                              /* Blue Shadow for Image Hover */
                              shadow-2xl shadow-zinc-400/50 hover:shadow-blue-500/30 transition-shadow duration-500
                              /* Asymmetrical Corner Look */
                              rounded-t-[3rem] rounded-br-[3rem] rounded-bl-lg`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Content Section (Pure White Card) */}
              <div className={`w-full lg:w-2/5 p-8 md:p-12 relative z-10 
                              /* Pure White Card with Subtly Dark Border/Shadow */
                              bg-white border border-zinc-200 shadow-xl shadow-zinc-300 text-[#1a1a1a]
                              /* Asymmetrical Corner Look */
                              rounded-t-[1.5rem] rounded-br-lg rounded-bl-[3rem]
                              /* Margin adjustment to overlap slightly with image */
                              ${index % 2 === 0 ? 'lg:-translate-x-12' : 'lg:translate-x-12'}`}
                style={{ minHeight: '350px' }}
              >
                <span className={`text-md uppercase tracking-[4px] font-bold ${service.color} mb-4 block`}>
                  0{index + 1}. {service.title.split(' ')[0]}
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-[#1a1a1a]">
                  {service.title}
                </h3>
                <p className="text-lg text-zinc-700 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-3 px-8 py-3 bg-blue-600 
                              text-white rounded-full text-md uppercase tracking-wider font-semibold 
                              hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/50`}> {/* BLUE CTA */}
                  Deep Dive
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;