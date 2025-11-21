import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";

const cards = [
  { img: "/images/work1.png", title: "Campaign Strategy" },
  { img: "/images/work2.png", title: "Instagram Growth" },
  { img: "/images/work3.png", title: "Creative Ads" },
  { img: "/images/work4.png", title: "Brand Storytelling" },
  { img: "/images/work5.png", title: "Design Showcase" },
];

export default function FullContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-gradient-to-br from-[#f7f7f8] to-[#ececec] font-[EXO] overflow-hidden"
    >
      {/* Background Art */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://images.unsplash.com/photo-1576197474570-3aac27fb77b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBhaWduaW5nfGVufDB8fDB8fHww')] bg-cover bg-center" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Creative Execution That{" "}
          <span className="text-indigo-600">Delivers Growth.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-lg text-black/70 max-w-3xl mx-auto"
        >
          Design, content, and campaigns crafted to elevate modern brands.
        </motion.p>
      </div>

      {/* Tilted Swiper Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 mb-24">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{ delay: 2200 }}
          loop={true}
          coverflowEffect={{
            rotate: 14,
            stretch: -25,
            depth: 140,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide
              key={i}
              className="w-[160px] md:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-98 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-black">{card.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Contact Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-black/10">
          <h3 className="text-4xl font-bold text-black">Send us a message</h3>
          <p className="text-black/60 mt-2">
            Have a question or something to share? Send us a message. We’ll get
            back to you shortly!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div>
              <label className="text-sm font-semibold text-black">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-lg border border-black/20 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-black">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-lg border border-black/20 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-black">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-black/20 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-black">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full px-4 py-3 rounded-lg border border-black/20 mt-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-black">Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-lg border border-black/20 mt-2 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
        </div>

        {/* Right Info Panel */}
        <div className="bg-pink-50 text-black rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold">Hi there!</h3>
          <p className="text-white/70 mt-2">
            We’re always here and happy to help you anytime.
          </p>

          <div className="space-y-5 mt-10">
            <div className="bg-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="text-white">sale@vbizgro.com</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <p className="text-sm text-white/60">Phone Number</p>
                <p className="text-white">91 9752505639</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-white/60">Address</p>
                <p className="text-white">Keshari nagar Seoni M.P.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
        
          </div>
        </div>
      </div>
    </section>
  );
}
