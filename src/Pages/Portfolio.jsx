import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { img: "/images/work1.jpg", title: "Campaign Strategy" },
  { img: "/images/work2.jpg", title: "Instagram Growth" },
  { img: "/images/work3.jpg", title: "Creative Ads" },
  { img: "/images/work4.jpg", title: "Brand Storytelling" },
  { img: "/images/work5.jpg", title: "Content Funnel" },
  { img: "/images/work6.jpg", title: "Analytics Dashboard" },
  { img: "/images/work7.jpg", title: "Community Engagement" },
  { img: "/images/work8.jpg", title: "Design Showcase" },
];

export default function PortfolioPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#fcfcfd] text-[#0f172a] font-[EXO] overflow-hidden my-48">
      {/* Abstract PNG background */}
      <div className="absolute inset-0 bg-[url('/images/bg-layer.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Central circular gradient + radial points */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
        <div className="w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-200 opacity-40 blur-2xl" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[160px] bg-black/10 origin-bottom"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-80px)`,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          YOUR <span className="text-indigo-600">FAVOURITE</span> DESIGNER
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          A showcase of campaigns, designs, and strategies we’ve built in social media marketing.
        </p>
        <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Portfolio Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`group rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md border border-white/60 bg-white transition-transform duration-300 hover:scale-[1.02]
              ${i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"} hover:rotate-0`}
          >
            <div className="h-64 w-full overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#0f172a]">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-6 text-xs text-slate-500 font-medium">
        PORTFOLIO
      </div>
      <div className="absolute bottom-6 right-6 text-xs text-slate-500 font-medium">
        © 2025
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 font-medium">
        designwithrahul@gmail.com
      </div>
      <div className="absolute top-6 left-6 text-xs text-slate-500 font-medium">
        @vbizgro
      </div>
    </section>
  );
}
