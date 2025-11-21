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
    <section className="relative w-full py-28 bg-[#fcfcfd] text-[#0f172a] font-[EXO] overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Our <span className="text-indigo-600">Portfolio</span>
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
            className="group rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md border border-white/60 bg-white transition-transform duration-300 hover:scale-[1.02]"
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
    </section>
  );
}
