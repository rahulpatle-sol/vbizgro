import React from "react";

export default function VBizGroAbout() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center mt-64 p-6 lg:p-10">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT: BRAND AREA */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 p-12 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-sm">
              Welcome to <span className="font-extrabold">VBizGro</span>
            </h1>
            <p className="mt-5 text-white/90 text-lg max-w-md">
              We build brands, craft stories, and create digital experiences that people remember.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm font-semibold">Services</div>
                <div className="text-xs">Social | Ads | Branding</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm font-semibold">Focus</div>
                <div className="text-xs">ROI | Growth | Impact</div>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow hover:bg-blue-50 transition">
              Work With Us
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE + ABOUT */}
        <div className="relative bg-white">
          {/* TOP IMAGE */}
          <div className="h-64 lg:h-[420px] w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop"
              alt="VBizGro"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute top-5 right-5 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium shadow">
              ❤️ Trusted by 50+ Brands
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="flex">
            {/* SIDE LABEL */}
            <div className="w-20 bg-blue-50 flex items-center justify-center">
              <span className="rotate-[-90deg] text-lg font-semibold tracking-wide text-blue-700">
                About us
              </span>
            </div>

            {/* ABOUT TEXT */}
            <div className="flex-1 p-10 text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>VBizGro</strong> is a next-gen digital & social media marketing agency
                helping brands build a strong online presence with clarity, creativity and data-backed strategies.
              </p>

              <p className="mb-4">
                We partner with startups, creators, and organizations to craft digital identities,
                run high-performing ad campaigns, design premium visuals, build websites, and create
                storytelling-driven content that actually converts.
              </p>

              <p className="mb-4">
                Our services include:
                <span className="font-semibold"> Social Media Management</span>,
                <span className="font-semibold"> Paid Advertising</span>,
                <span className="font-semibold"> Branding</span>,
                <span className="font-semibold"> Website Development</span>,
                <span className="font-semibold"> SEO & Performance Marketing</span>,
                and <span className="font-semibold"> Automation Funnels</span>.
              </p>

              <p>
                With transparent communication, modern design, and a “growth-first” approach,
                we ensure every brand gets the attention, voice, and impact it deserves.
                <br />
                <strong>Let’s grow smarter. Let’s grow VBizGro.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
