import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    title: "Strategic Consulting & Research",
    description:
      "We dive deep into audience and market data to craft custom, unshakeable strategies. Our insights are blueprints for market domination.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
  },
  {
    title: "Post Design & Crausial desing",
    description:
      "Conversion-focused campaigns across all channels. We optimize every post for   sustainable growth.",
    image:
      "",
  },
  {
    title: "Brand Identity & Visual Systems",
    description:
      "We build holistic brand identities. From motion graphics to custom typography, your visual system will be unforgettable and instantly recognizable.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e7e8c5f9c4e?q=80&w=1200",
  },
  {
    title: "Content Creation & Storytelling",
    description:
      "Scroll-stopping content that connects. Production, scripting, and multi-platform distribution—your story reaching the right audience at the perfect moment.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
  },
];

export default function ServicesPremium() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const progressRef = useRef(null);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Headline intro
    const tlHead = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });
    tlHead
      .from(".services-eyebrow", { opacity: 0, y: 10, duration: 0.6, ease: "power2.out" })
      .from(".services-title", { opacity: 0, y: 14, duration: 0.7, ease: "power2.out" }, "-=0.2")
      .from(".services-sub", { opacity: 0, y: 12, duration: 0.6, ease: "power2.out" }, "-=0.2");

    // Cards stagger + slight lift
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0, rotate: 0.2 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax images
    parallaxRefs.current.forEach((img, i) => {
      gsap.to(img, {
        y: i % 2 === 0 ? -30 : -50,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Scroll-linked progress bar
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#fcfcfd] text-[#0f172a] overflow-hidden"
    >
      {/* Ambient tint and grain for premium white */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/90" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1400&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Top progress bar */}
      <div className="sticky top-0 z-50 h-1 bg-transparent">
        <div
          ref={progressRef}
          className="origin-left h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        {/* Headline block */}
        <div className="text-center mb-24">
          <p className="services-eyebrow text-xs md:text-sm uppercase tracking-[6px] text-indigo-600 font-semibold">
            Our Signature Capabilities
          </p>
          <h2 className="services-title text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mt-3">
            What We Master.
          </h2>
          <p className="services-sub text-base md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Bespoke digital architecture built with strategic precision and high‑fidelity design.
          </p>

          {/* Underline accent */}
          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        {/* Services list */}
        <div className="flex flex-col space-y-28">
          {serviceData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
            >
              {/* Media */}
              <div
                className={`relative ${index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}
              >
                <div className="group relative h-[420px] rounded-[28px] overflow-hidden bg-white/80 border border-white/70 backdrop-blur-sm shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                  <img
                    ref={(el) => (parallaxRefs.current[index] = el)}
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* milk gloss strip */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/70 to-transparent" />
                  {/* subtle colored shadow on hover */}
                  <div className="absolute inset-0 ring-1 ring-white/60 rounded-[28px] pointer-events-none" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`relative ${index % 2 === 0 ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="rounded-[24px] bg-white/85 backdrop-blur-sm border border-white/70 shadow-[0_10px_32px_rgba(15,23,42,0.06)] p-8 md:p-10"
                >
                  <span className="block text-xs md:text-sm uppercase tracking-[5px] text-indigo-600 font-semibold mb-3">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-white to-indigo-50 text-slate-900 border border-white/70 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition"
                    >
                      Deep Dive
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-indigo-600 text-white shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:bg-indigo-700 transition"
                    >
                      Start a project
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Calm CTA block */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[28px] bg-white/85 backdrop-blur-sm border border-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.06)] p-10 md:p-14 text-center"
          >
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight">
              Built for Calm Confidence
            </h4>
            <p className="text-slate-700 mt-3 max-w-2xl mx-auto">
              Clean visuals, measured motion, zero noise. A space where brand
              clarity meets steady momentum—designed to feel premium.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#method"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-white to-indigo-50 text-slate-900 border border-white/70 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition"
              >
                Explore our methodology
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-indigo-600 text-white shadow-[0_8px_24px_rgba(99,102,241,0.25)] hover:bg-indigo-700 transition"
              >
                Talk to us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
