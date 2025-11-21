import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Nav.jsx";
import Sidebar from "./Pages/Sidebar.jsx";
import Hero from "./Pages/Hero.jsx";
import Services from "./Pages/Services.jsx";
import WhyUs from "./Pages/WhyUs.jsx";
import AboutUs from "./Pages/About.jsx";
import Footer from "./Pages/Footer.jsx";
import Pricing from "./Pages/Pricing.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import ProcessSection from "./Pages/Process.jsx";
import PortfolioPage from "./Pages/Portfolio.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyUs />
              <Services />
              <ProcessSection />
              <AboutUs />
              <Pricing />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* Portfolio route */}
        <Route path="/work" element={<PortfolioPage />} />

        {/* Add more routes if needed */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
