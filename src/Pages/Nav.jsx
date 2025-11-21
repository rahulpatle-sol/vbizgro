import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const FloatingNavbar = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const linkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.12 }
    );

    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: "none", pointerEvents: "none", opacity: 0 });
    }
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linkRefs.current;

    if (!overlay) return;

    if (isOpen) {
      gsap.set(overlay, { display: "flex", pointerEvents: "auto" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        overlay,
        { opacity: 0, scale: 0.98, backdropFilter: "blur(0px)" },
        { opacity: 1, scale: 1, backdropFilter: "blur(6px)", duration: 0.5 }
      ).fromTo(
        links,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        "-=0.28"
      );
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power3.in" } });
      tl.to(links, { y: 20, opacity: 0, duration: 0.25, stagger: 0.05 }).to(
        overlay,
        { opacity: 0, scale: 0.98, backdropFilter: "blur(0px)", duration: 0.4 },
        "-=0.12"
      ).set(overlay, { display: "none", pointerEvents: "none" });
    }
  }, [isOpen]);

  const toggleMenu = (e) => {
    if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    setIsOpen((s) => !s);
  };

  const navLinks = [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50
                   bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-2
                   flex items-center gap-6 text-sm font-semibold text-[#0f172a]"
        aria-label="Primary"
      >
        {/* Logo → Home */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-indigo-600 hover:text-indigo-700 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png" // place your logo in public/logo.png
            alt="VBIZGRO Logo"
            className="w-32 h-12 object-contain"
          />
          <span className="hidden md:inline text-sm md:text-base">VBIZGRO</span>
        </Link>

        {/* Main nav links */}
        {navLinks.slice(0, 3).map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="relative group px-1 py-1"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-extrabold tracking-tight text-sm md:text-base">{label}</span>
            <span
              className="absolute left-0 -bottom-0.5 h-0.5 w-full transform scale-x-0 origin-left transition-transform duration-300
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 group-hover:scale-x-100"
            />
          </Link>
        ))}

        {/* Menu / Close Button */}
        <button
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="site-overlay"
          className="ml-2 p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300"
          title={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-[#0f172a]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#0f172a]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Fullscreen Overlay Nav */}
      <div
        id="site-overlay"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-40 hidden items-center justify-center text-[#0f172a] font-clash"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,250,255,1) 55%, rgba(239,246,255,1) 100%)",
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
          display: "none",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-4xl md:text-5xl leading-tight text-center">
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              ref={(el) => (linkRefs.current[i] = el)}
              to={to}
              onClick={() => setIsOpen(false)}
              className="relative group px-2 py-1 opacity-0"
              style={{ fontWeight: 800 }}
            >
              <span className="block">{label}</span>
              <span
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-48 max-w-full origin-left scale-x-0 transition-transform duration-300
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingNavbar;
