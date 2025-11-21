import React from "react";

export default function ContactUsSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#fefefe] via-[#f8f4ee] to-[#f3eadd] flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12">
      
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[420px] h-[420px] rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white/30 backdrop-blur-xl">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=800"
            alt="Contact Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-sm text-gray-600 mb-6">
          We'd love to hear from you. Fill out the form and our team will reach out shortly.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
