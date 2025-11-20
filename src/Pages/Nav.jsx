import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const FloatingNavbar = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const linkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set(overlayRef.current, { pointerEvents: 'auto' })
        .fromTo(
          overlayRef.current,
          { opacity: 0, scale: 1.05, backdropFilter: 'blur(0px)' },
          { opacity: 1, scale: 1, backdropFilter: 'blur(8px)', duration: 0.6 }
        )
        .fromTo(
          linkRefs.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.3'
        );
    } else {
      const tl = gsap.timeline({ defaults: { ease: 'power3.in' } });

      tl.to(linkRefs.current, { y: 50, opacity: 0, duration: 0.4, stagger: 0.1 })
        .to(
          overlayRef.current,
          { opacity: 0, scale: 1.05, backdropFilter: 'blur(0px)', duration: 0.5 },
          '-=0.2'
        )
        .set(overlayRef.current, { pointerEvents: 'none' });
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Navbar */}
      <div
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-2 
                   flex items-center space-x-6 text-sm font-semibold text-[#1a1a1a]"
      >
        <a href="#work" className="hover:text-orange-500 transition-colors">Work</a>
        <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
        <a href="#about" className="hover:text-orange-500 transition-colors">About</a>

        {/* Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="ml-4 p-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg
            className="w-6 h-6 text-[#1a1a1a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Fullscreen Overlay Nav */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white/95 text-zinc-700 flex flex-col items-center justify-center 
                   space-y-8 text-3xl font-clash z-40 opacity-0 pointer-events-none"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-8 h-8 text-zinc-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {['Work', 'Services', 'About', 'Contact'].map((link, i) => (
          <a
            key={link}
            ref={el => (linkRefs.current[i] = el)}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400 transition-colors opacity-0"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default FloatingNavbar;
