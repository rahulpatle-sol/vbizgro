import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";

const cards = [
  { img: "/images/work1.jpg", title: "Campaign Strategy" },
  { img: "/images/work2.jpg", title: "Instagram Growth" },
  { img: "/images/work3.jpg", title: "Creative Ads" },
  { img: "/images/work4.jpg", title: "Brand Storytelling" },
  { img: "/images/work5.jpg", title: "Design Showcase" },
];

export default function TiltedCarouselWithContact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 bg-white text-black font-[EXO] overflow-hidden"
    >
      {/* Background PNG */}
      <div className="absolute inset-0 bg-[url('/images/bg-layer.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Eyewear That <span className="text-indigo-600">Stands Out</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-black/70 max-w-2xl mx-auto"
        >
          Bold visuals. Scrollable impact. Built for conversion.
        </motion.p>

        <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Tilted Swiper Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-20">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2500 }}
          coverflowEffect={{
            rotate: 12,
            stretch: -20,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide
              key={i}
              className="w-[260px] md:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-black">{card.title}</h3>
                  <button className="mt-4 px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                    Enter Store
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-black/10 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-black">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md border border-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
