import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TiltedArcShowcase() {
  const [isGrid, setIsGrid] = useState(false);

  const images = [
    "/images/work1.png",
    "/images/work2.png",
    "/images/ecoavenstalcd.png",
    "/images/work3.png",
    "/images/work5.png",
    "/images/work6.png",
    "/images/work7.png",
  ];

  const rotations = [-24, -8, -4, 0, 4, 18, 24];
  const offsets = [-180, -110, -55, 0, 55, 110, 180];
  const scales = [0.85, 0.9, 0.95, 1.15, 0.95, 0.9, 0.85];

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative bg-white  overflow-hidden">

      {/* Toggle Button */}
      <h1 className="text-3xl text-black">Creation build market places </h1>
      <button
        onClick={() => setIsGrid((p) => !p)}
        className="absolute top-6 px-6 py-3 bg-black text-white rounded-full shadow-lg z-50"
      >
        {isGrid ? "Back to Arc View" : "Switch to Grid View"}
      </button>

      {/* Outer Container */}
      <div className="relative w-full h-full flex items-center justify-center">

        {!isGrid ? (
          /* ARC VIEW */
          <div className="relative flex items-end justify-center w-full pointer-events-none">

            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[i],
                  x: offsets[i],
                }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
                className="absolute"
                style={{ zIndex: i === 3 ? 20 : 10 }}
              >
                {/* 3D Flip Wrapper */}
                <div
                  className="relative rounded-2xl cursor-pointer"
                  style={{
                    width: `${360 * scales[i]}px`,
                    height: `${460 * scales[i]}px`,
                    perspective: "1200px",
                  }}
                >
                  <motion.div
                    drag
                    whileHover={{
                      rotateY: 180,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    className="w-full h-full relative"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      Details
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* GRID VIEW */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                drag
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                <img
                  src={img}
                  className="w-full h-[260px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
    </section>
  );
}
