import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LOGIN_URL, WHATSAPP_TEST } from "../content/site";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/", sectionId: "hero" },
    { name: "Dispositivos", href: "/instalacao", sectionId: "dispositivos" },
    { name: "Planos", href: "/planos", sectionId: "planos" },
    { name: "Depoimentos", href: "/#depoimentos", sectionId: "depoimentos" },
    { name: "FAQ", href: "/faq", sectionId: "faq" },
    { name: "Guias", href: "/blog", sectionId: "guias" },
  ];

  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    if (path === "/") return location.pathname === "/" && !href.includes("#");
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    setIsOpen(false);
    if (!sectionId || location.pathname !== "/") return;
    const el = document.getElementById(sectionId);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#C67C2E] rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Play fill="white" size={20} />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? "text-gray-900" : "text-gray-900"}`}>
            Coffee<span className="text-[#C67C2E]">Play</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(event) => onNavClick(event, link.sectionId)}
              className={`${isActive(link.href) ? "text-[#C67C2E]" : "text-gray-600"} hover:text-[#C67C2E] font-medium transition-colors text-sm uppercase tracking-wide`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-[#C67C2E] font-bold text-sm transition-colors"
          >
            <User size={18} />
            Central do Assinante
          </a>
          <a
            href={WHATSAPP_TEST}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#C67C2E] hover:bg-[#A66624] text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            TESTE GRÁTIS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-gray-800 hover:text-[#C67C2E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(event) => onNavClick(event, link.sectionId)}
                  className="text-gray-600 hover:text-[#C67C2E] font-bold text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-bold hover:text-[#C67C2E] flex items-center gap-2"
              >
                 <User size={20} /> Central do Assinante
              </a>
              <a
                href={WHATSAPP_TEST}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-4 bg-[#C67C2E] text-white font-bold rounded-lg shadow-md"
              >
                TESTE GRÁTIS AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
