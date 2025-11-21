import React from "react";

// VBizGro About Component
// - Uses Tailwind CSS classes for styling (no imports required)
// - Image currently points to the uploaded local file path. To use an Unsplash image, replace the `imgSrc` value with an Unsplash URL.

const imgSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop"; // local image (provided)
// Example Unsplash replacement: const imgSrc = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1400&q=80&auto=format&fit=crop";

export default function VBizGroAbout() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Intro block */}
        <div className="bg-gradient-to-br from-blue-300 to-pink-200 p-12 flex flex-col justify-between">
          <div>
            <div className="text-4xl lg:text-5xl font-semibold text-white max-w-md leading-snug">
              Welcome to <span className="font-extrabold">VBizGro</span>.
              <br />
              We build brands that people love.
            </div>
          </div>

          <div className="mt-8">
            <p className="text-white/90 max-w-md">
              VBizGro is a full-stack digital & social media marketing agency focused on transforming businesses
              into future-ready brands. We blend creativity with data to craft campaigns and experiences that don’t
              just look good — they perform.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white/20 p-3 rounded">
                <div className="text-sm font-medium">Services</div>
                <div className="text-sm">Social, Ads, Branding</div>
              </div>
              <div className="bg-white/20 p-3 rounded">
                <div className="text-sm font-medium">Results</div>
                <div className="text-sm">ROI-focused campaigns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image + About content panel */}
        <div className="relative bg-white">
          {/* Right top image */}
          <div className="h-64 lg:h-full lg:min-h-[480px] w-full overflow-hidden">
            <img
              src={imgSrc}
              alt="VBizGro about"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
            {/* Donate floating label mimic (heart) */}
            <div className="absolute right-4 top-6 bg-white/80 rounded-full p-2 shadow">
              ♥
            </div>
          </div>

          {/* Bottom content panel */}
          <div className="flex">
            {/* Vertical pink bar with rotated "About us" */}
            <div className="w-20 bg-pink-200 flex items-center justify-center">
              <div className="transform -rotate-90 origin-center text-xl font-bold text-pink-800 tracking-wide">
                About us
              </div>
            </div>

            {/* Text content area */}
            <div className="flex-1 p-10">
              <div className="text-sm text-gray-500 leading-relaxed">
                <p className="mb-4">
                  Since its beginning, <strong>VBizGro</strong> has been on a mission to help brands grow with clarity,
                  creativity, and smart digital strategy. We’re a full-stack digital & social media marketing agency
                  dedicated to transforming businesses into powerful, future-ready brands.
                </p>

                <p className="mb-4">
                  We help startups, creators, and growing businesses build a standout online presence through strategic
                  marketing, content creation, branding, ad campaigns, and performance-driven growth solutions.
                </p>

                <p className="mb-4">
                  Our signature services include Social Media Management, Paid Advertising (Meta + Google), Branding &
                  Creative Design, Website Development, Content Strategy & Production, SEO & Performance Marketing, and
                  Funnels + Automation Setup.
                </p>

                <p>
                  Every project is led with transparency, collaboration, and a “your success is our success” mindset.
                  Let’s grow your brand with confidence, creativity, and clear results — the VBizGro way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
