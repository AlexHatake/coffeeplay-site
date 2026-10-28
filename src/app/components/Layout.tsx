import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { FontLoader } from "./FontLoader";

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const Layout = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.lang = "pt-BR";

    const tawkScript = document.createElement("script");
    tawkScript.async = true;
    tawkScript.src = "https://embed.tawk.to/5f20e0164eb6fc4a189b0cbe/1h6ssted0";
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");

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
    <div className="bg-white min-h-screen font-sans antialiased text-gray-900 selection:bg-[#C67C2E] selection:text-white">
      <FontLoader />
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};
