import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CanvasWaveLayer from './wave';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
    });

    gsap.fromTo(contentRef.current, 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen bg-[#0f172a font-[EXO] overflow-hidden">
      {/* Optional: Thread or Orb Background */}
      <CanvasWaveLayer /> 

      {/* Hero Content */}
      <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight"
        >
          WE BUILD DIGITAL.
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl max-w-2xl text-slate-300"
        >
          Bespoke creativity, strategic clarity, and rapid scalability—crafted for your brand’s breakthrough.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-xl text-white font-semibold"
        >
          Let's Transform Your Digital Presence
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.9 }}
          className="mt-8 text-sm text-slate-400"
        >
          Trusted by visionary brands and backed by data-driven strategy.
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
