import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// GSAP
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// Components
import Sidebar from "./Pages/Sidebar.jsx";
import Hero from "./Pages/Hero.jsx";
import Services from "./Pages/Services.jsx";
import WhyUs from "./Pages/WhyUs.jsx";
import AboutUs from "./Pages/About.jsx";
import Footer from "./Pages/Footer.jsx";
import Pricing from "./Pages/Pricing.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import PortfolioPage from "./Pages/Portfolio.jsx";
import ProcessSection from "./Pages/Process.jsx";
import Team from "./Pages/Team.jsx";
import AnalyticsSection from "./Pages/Analytics.jsx";
import VBizGroFAQ from "./Pages/Faq.jsx";
import ContactUsSection from "./Pages/CtaForm.jsx";
import ContactUs from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/404.jsx";
import FilmstripReel from "./Components/ThreeDslider.jsx";
function App() {
  const location = useLocation();

  /* 🔥 Scroll to top on route change */
  useEffect(() => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: 0,
      ease: "power2.out",
    });
  }, [location.pathname]);

  return (
    <>
      <Sidebar />

      <Routes>
        {/* Homepage */}
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
              <Team />
              <AnalyticsSection />
              
              <VBizGroFAQ />
              <ContactUsSection />
           
            </>
          }
        />

        {/* Portfolio */}
        <Route path="/work" element={<PortfolioPage />} />

        {/* Single Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/faq" element={<VBizGroFAQ />} />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
