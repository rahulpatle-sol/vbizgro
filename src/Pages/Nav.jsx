import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const FloatingNavbar = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const linkRefs = useRef([]);
  const overlayLinkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    // initial nav entrance (subtle)
    gsap.fromTo(
      navRef.current,
      { y: -28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.08 }
    );

    // small stagger for inline nav links (desktop)
    gsap.fromTo(
      linkRefs.current,
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06, delay: 0.18 }
    );

    // ensure overlay initially hidden
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: "none", pointerEvents: "none", opacity: 0 });
    }
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const overlayLinks = overlayLinkRefs.current;

    if (!overlay) return;

    if (isOpen) {
      // show overlay then animate links
      gsap.set(overlay, { display: "flex", pointerEvents: "auto" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        overlay,
        { opacity: 0, scale: 0.99, backdropFilter: "blur(0px)" },
        { opacity: 1, scale: 1, backdropFilter: "blur(6px)", duration: 0.45 }
      ).fromTo(
        overlayLinks,
        { y: 28, opacity: 0, rotateX: -6 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.5, stagger: 0.07 },
        "-=0.2"
      );
    } else {
      // close overlay with reverse animation
      const tl = gsap.timeline({ defaults: { ease: "power3.in" } });
      tl.to(overlayLinks, { y: 18, opacity: 0, duration: 0.22, stagger: 0.04 })
        .to(
          overlay,
          { opacity: 0, scale: 0.99, backdropFilter: "blur(0px)", duration: 0.38 },
          "-=0.12"
        )
        .set(overlay, { display: "none", pointerEvents: "none" });
    }
  }, [isOpen]);

  const toggleMenu = (e) => {
    if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    setIsOpen((s) => !s);
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-5 py-2 flex items-center gap-4"
        aria-label="Primary"
        style={{
          // custom gradient that includes pink, green, white and blue blend
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,230,238,0.9) 15%, rgba(226,252,231,0.9) 50%, rgba(219,234,254,0.9) 100%)",
          boxShadow: "0 8px 30px rgba(15,23,42,0.09)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Logo → Home */}
        <Link
          to="/"
          className="flex items-center gap-3 font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png"
            alt="VBIZGRO Logo"
            className="w-28 h-10 object-contain"
            style={{ filter: "drop-shadow(0 6px 18px rgba(15,23,42,0.06))" }}
          />
          <span className="hidden md:inline text-sm font-medium tracking-tight">VBIZGRO</span>
        </Link>

        {/* Inline nav links (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.slice(0, 3).map(({ label, to }, i) => (
            <Link
              key={label}
              to={to}
              ref={(el) => (linkRefs.current[i] = el)}
              className="relative px-2 py-1 text-sm font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="block">{label}</span>
              <span
                className="absolute left-0 -bottom-0.5 h-0.5 w-full transform scale-x-0 origin-left transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #ec4899 0%, #6366f1 45%, #06b6d4 100%)",
                }}
              />
            </Link>
          ))}
        </div>

        {/* Spacer to keep centered look */}
        <div className="hidden md:block w-2" />

        {/* Menu / Close Button */}
        <button
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="site-overlay"
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
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
        className="fixed inset-0 z-40 hidden items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,251,255,0.95) 60%, rgba(239,246,255,0.95) 100%)",
          WebkitBackdropFilter: "blur(6px)",
          backdropFilter: "blur(6px)",
          display: "none",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              ref={(el) => (overlayLinkRefs.current[i] = el)}
              to={to}
              onClick={() => setIsOpen(false)}
              className="relative px-2 py-1 opacity-0 text-2xl md:text-4xl font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
            >
              <span className="block">{label}</span>
              <span
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-48 origin-left scale-x-0 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #ec4899 0%, #6366f1 45%, #06b6d4 100%)",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingNavbar;
