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

import ContactUs from "./Pages/Contact.jsx";

import FilmstripReel from "./Components/ThreeDslider.jsx";
import TestimonialCarousel from "./Pages/Team.jsx";
import TeamCarousel from "./Pages/Team.jsx";
import VBizGroFAQ from "./Pages/Faq.jsx"
import AnalyticsSection from "./Pages/Analytics.jsx";
import ContactUsSection from "./Pages/CtaForm.jsx";
import PricingSection from "./Pages/Pricing.jsx";
import PageNotFound from "./Pages/404.jsx";
function App() {
  return (
    <>
    
      <Sidebar />

      <Routes>
      
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
       <FilmstripReel/>
{/* <TeamCarousel/> */}
<AnalyticsSection/>
<VBizGroFAQ/>
<ContactUsSection/>

            </>
          }
        />

        {/* Portfolio route */}
        <Route path="/work" element={<PortfolioPage />} />

        {/* Add more routes if needed */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/pricing" element={<PricingSection/>} />
        <Route path="/process" element={<ProcessSection/>} />
        <Route path="/404" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
