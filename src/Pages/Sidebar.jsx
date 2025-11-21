import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const brandingRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

    // entry animation for sidebar and its children
    tl.fromTo(
      sidebarRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.45 }
    )
      .fromTo(brandingRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, '-=0.45')
      .fromTo(socialRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0 }, '-=0.35')
      .fromTo(ctaRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, ease: 'back.out(1.4)' }, '-=0.25');

    // simple ScrollTrigger to keep sidebar stable if page scrolls
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: () => {},
    });
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="hidden md:flex fixed top-0 left-0 bottom-0 w-[84px] z-40
                 bg-white/60 backdrop-blur-md border-r border-white/40
                 p-4 flex-col justify-between items-center text-center select-none"
      aria-label="VBizGro sidebar"
      style={{ WebkitBackdropFilter: 'blur(8px)' }}
    >
      {/* Top Branding */}
      <div ref={brandingRef} className="flex flex-col items-center pt-6">
        {/* Use your logo placed in public root as /logo.png or update path */}
        <img
          src="https://www.vbizgro.com/assets/logo-removebg-preview.png"
          alt="VBizGro"
          className="w-10 h-10 object-contain mb-4"
        />
        <span className="transform rotate-90 origin-center text-xs tracking-widest font-semibold text-slate-800">
          VBIZGRO
        </span>
        <span className="transform rotate-90 origin-center text-[9px] text-slate-500 mt-2">
          Creative & Growth
        </span>
      </div>

      {/* Bottom: Social + CTA */}
      <div className="flex flex-col items-center mb-6 space-y-8">
        {/* Social icons + label */}
        <div ref={socialRef} className="flex flex-col items-center space-y-4">
          <span className="rotate-90 origin-center text-[9px] uppercase tracking-wider text-slate-500 mb-1">
            Follow
          </span>

          <div className="flex flex-col space-y-3 text-lg">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              {/* SVG LinkedIn */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.1c.7-1.3 2.4-2.3 4.9-2.3C23 7 24 10.1 24 15.1V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V24H8V7z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-indigo-600 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5a4 4 0 110 8 4 4 0 010-8zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-indigo-600 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-1A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA (minimal icon with accessible label) */}
        <div ref={ctaRef} className="flex flex-col items-center">
          <a
            href="#contact"
            className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors"
            aria-label="Start a project"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>

          <span className="mt-2 text-[10px] text-slate-600">Start</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
