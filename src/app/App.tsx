import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InfoStrip } from "./components/InfoStrip";
import { Devices } from "./components/Devices";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Reseller } from "./components/Reseller";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { FontLoader } from "./components/FontLoader";
import { SEO } from "./components/SEO";
import { HelmetProvider } from "react-helmet-async";

// Extend Window interface to allow Tawk API
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

function App() {
  useEffect(() => {
    // Scroll Behavior
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.lang = "pt-BR";

    // Tawk.to Script Injection
    const tawkScript = document.createElement("script");
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/5f20e0164eb6fc4a189b0cbe/1h6ssted0';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    
    // Safety check for existing script tags
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(tawkScript, firstScript);
    } else {
        document.body.appendChild(tawkScript);
    }

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-white min-h-screen font-sans antialiased text-gray-900 selection:bg-[#C67C2E] selection:text-white">
        <FontLoader />
        <SEO /> 
        
        <Navbar />
        
        <main>
          <Hero />
          <InfoStrip />
          <Devices />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Reseller />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </HelmetProvider>
  );
}

export default App;
