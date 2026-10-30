import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { EMAIL, LOGIN_URL, PHONE_DISPLAY, WHATSAPP_SUPPORT } from "../content/site";

export const Footer = () => {
  return (
    <footer className="bg-[#2C1A12] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
           <h3 className="text-2xl font-extrabold text-[#C67C2E] mb-6">CoffeePlay</h3>
           <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
             A melhor plataforma de entretenimento para sua família desde 2020. Assista TV, Filmes e Séries com qualidade de cinema no conforto da sua casa.
           </p>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C67C2E] transition-colors"><Instagram size={18} /></a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C67C2E] transition-colors"><Facebook size={18} /></a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C67C2E] transition-colors"><Mail size={18} /></a>
           </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-[#C67C2E] transition-colors">Início</Link></li>
            <li><Link to="/planos" className="hover:text-[#C67C2E] transition-colors">Planos</Link></li>
            <li><Link to="/instalacao" className="hover:text-[#C67C2E] transition-colors">Dispositivos</Link></li>
            <li><Link to="/instalacao/smart-tv" className="hover:text-[#C67C2E] transition-colors">Smart TV</Link></li>
            <li><Link to="/instalacao/android-tv-box" className="hover:text-[#C67C2E] transition-colors">Android e TV Box</Link></li>
            <li><Link to="/instalacao/fire-stick" className="hover:text-[#C67C2E] transition-colors">Fire Stick</Link></li>
            <li><Link to="/instalacao/celular" className="hover:text-[#C67C2E] transition-colors">Celular</Link></li>
            <li><Link to="/instalacao/pc" className="hover:text-[#C67C2E] transition-colors">Computador</Link></li>
            <li><Link to="/faq" className="hover:text-[#C67C2E] transition-colors">Ajuda</Link></li>
            <li><Link to="/teste-gratis" className="hover:text-[#C67C2E] transition-colors">Teste grátis</Link></li>
            <li><a href={LOGIN_URL} className="hover:text-[#C67C2E] transition-colors">Central do Assinante</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Guias</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/blog" className="hover:text-[#C67C2E] transition-colors">Todos os guias</Link></li>
            <li><Link to="/blog/iptv-travando" className="hover:text-[#C67C2E] transition-colors">IPTV travando</Link></li>
            <li><Link to="/blog/internet-para-iptv-4k" className="hover:text-[#C67C2E] transition-colors">Internet para 4K</Link></li>
            <li><Link to="/blog/m3u-ou-xtream-codes" className="hover:text-[#C67C2E] transition-colors">M3U ou Xtream</Link></li>
            <li><Link to="/blog/como-escolher-iptv" className="hover:text-[#C67C2E] transition-colors">Escolher um IPTV</Link></li>
            <li><Link to="/blog/iptv-e-seguro" className="hover:text-[#C67C2E] transition-colors">Cuidados ao assinar</Link></li>
            <li><Link to="/blog/melhor-aparelho-para-iptv" className="hover:text-[#C67C2E] transition-colors">Melhor aparelho</Link></li>
            <li><Link to="/blog/iptv-no-chromecast" className="hover:text-[#C67C2E] transition-colors">IPTV no Chromecast</Link></li>
            <li><Link to="/apps/iptv-smarters-pro" className="hover:text-[#C67C2E] transition-colors">IPTV Smarters</Link></li>
            <li><Link to="/apps/tivimate" className="hover:text-[#C67C2E] transition-colors">TiviMate</Link></li>
            <li><Link to="/apps/xciptv" className="hover:text-[#C67C2E] transition-colors">XCIPTV</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Atendimento</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#25D366]" />
              <a href={WHATSAPP_SUPPORT} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#C67C2E]" />
              <a href={`mailto:${EMAIL}`} className="hover:text-[#C67C2E] transition-colors">{EMAIL}</a>
            </li>
            <li className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
              <p>Segunda a Segunda: 24 horas</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        &copy; 2020 - {new Date().getFullYear()} Coffee Play. Todos os direitos reservados.
      </div>
    </footer>
  );
};
