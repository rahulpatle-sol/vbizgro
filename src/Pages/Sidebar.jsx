import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const brandingRef = useRef(null); // Renamed from textRef for clarity
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // We'll add ScrollTrigger to fix it properly and account for potential scroll behavior
    
    // Animate in from the side on load
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(sidebarRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, delay: 0.5 })
      .fromTo(brandingRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 1)
      .fromTo(socialRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 1.2)
      .fromTo(ctaRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, 1.4);

    // Optional: Keep Sidebar visible even if the Hero section pins/unpins
    ScrollTrigger.create({
      trigger: 'body', // Use body or a main container
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        // Simple logic to keep the sidebar fixed (though 'fixed' class usually handles this)
      },
    });

  }, []);

  return (
    <div 
      ref={sidebarRef}
      className="fixed top-0 left-0 bottom-0 w-[80px] h-screen z-40 
                 /* Dark Glass Against Light Background */
                 bg-black/20 backdrop-filter backdrop-blur-md 
                 p-4 flex flex-col justify-between items-center text-center font-[EXO] text-white"
      style={{ borderRight: '1px solid rgba(255, 255, 255, 0.2)' }} // Softer border
    >
      
      {/* --- Top Branding (NEXA) --- */}
      <div ref={brandingRef} className="flex flex-col items-center">
        <span className="text-sm tracking-widest uppercase origin-bottom-left transform rotate-90 -translate-x-1/2 mt-16 font-semibold text-white">
          NEXA
        </span>
        <span className="text-xs tracking-wide uppercase origin-bottom-left transform rotate-90 -translate-x-1/2 mt-10 font-light text-gray-300">
          Digital Agency
        </span>
      </div>

      {/* --- Bottom Section: Social & CTA --- */}
      <div className="flex flex-col items-center mb-4 space-y-12">
        
        {/* Social Icons (Simplified Look) */}
        <div ref={socialRef} className="flex flex-col items-center space-y-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 transform rotate-90">
            Follow Us
          </p>
          <div className="flex flex-col space-y-4 text-xl">
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* CTA Button (Cleaned up, focused on icon) */}
        <div ref={ctaRef} className="flex flex-col items-center space-y-2">
          {/* Text is removed to make it minimal/chill, relying on the button icon */}
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;