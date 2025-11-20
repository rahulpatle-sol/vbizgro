import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const btn = document.getElementById('viewMoreBtnf');
    const more = document.getElementById('moreServices');
    if (btn && more) {
      btn.addEventListener('click', () => {
        more.classList.toggle('hidden');
        btn.textContent = more.classList.contains('hidden') ? 'View More' : 'View Less';
      });
    }
  }, []);

  return (
    <footer className="relative bg-black border-t border-gray-800 py-20 overflow-hidden font-nico-moji">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1681101378971-5f5dc4e5000e?q=80&w=1657&auto=format&fit=crop"
        alt="Tech Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Gradient orb */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-72 h-72 bg-gradient-to-br from-orange-600/40 to-red-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 text-sm text-gray-400">
        {/* Social */}
        <div className="space-y-4">
          <h2 className="uppercase tracking-widest text-white">Follow us</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/company/vbizgro" className="p-3 border border-gray-700 hover:bg-gray-800 hover:text-white transition rounded-md">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="https://www.facebook.com/people/Vbizgro/61581148455498/" className="p-3 border border-gray-700 hover:bg-gray-800 hover:text-white transition rounded-md">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="https://www.instagram.com/vbizgro/" className="p-3 border border-gray-700 hover:bg-gray-800 hover:text-white transition rounded-md">
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a href="#" className="p-3 border border-gray-700 hover:bg-gray-800 hover:text-white transition rounded-md">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="uppercase tracking-widest mb-4 text-white">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="uppercase tracking-widest mb-4 text-white">Help Center</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Security</a></li>
            <li><a href="#" className="hover:text-white transition">Affiliate</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="uppercase tracking-widest mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {/* Top 3 Services */}
            <li><a href="#" className="hover:text-white transition">Instagram Management</a></li>
            <li><a href="#" className="hover:text-white transition">LinkedIn Content Writing</a></li>
            <li><a href="#" className="hover:text-white transition">Personal Branding</a></li>

            {/* Hidden extra services */}
            <div id="moreServices" className="hidden space-y-2 mt-2">
              <li><a href="#" className="hover:text-white transition">Reels & Video Editing</a></li>
              <li><a href="#" className="hover:text-white transition">Carousel Design</a></li>
              <li><a href="#" className="hover:text-white transition">Social Media Strategy</a></li>
              <li><a href="#" className="hover:text-white transition">Profile Optimization</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook Page Management</a></li>
              <li><a href="#" className="hover:text-white transition">Startup Brand Building</a></li>
              <li><a href="#" className="hover:text-white transition">Creative Post Design</a></li>
            </div>
          </ul>
          <button id="viewMoreBtnf" className="mt-4 text-indigo-400 hover:text-white text-sm transition">
            View More
          </button>
        </div>

        {/* Press */}
        <div>
          <h3 className="uppercase tracking-widest mb-4 text-white">Press</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Investors</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-800 mt-16 pt-6 text-center text-xs text-gray-500">
        <p>vbizgro <br />© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
