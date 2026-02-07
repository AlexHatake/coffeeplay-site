import React from "react";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2C1A12] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
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
            <li><a href="#" className="hover:text-[#C67C2E] transition-colors">Início</a></li>
            <li><a href="#planos" className="hover:text-[#C67C2E] transition-colors">Planos</a></li>
            <li><a href="#dispositivos" className="hover:text-[#C67C2E] transition-colors">Dispositivos</a></li>
            <li><a href="#faq" className="hover:text-[#C67C2E] transition-colors">Ajuda</a></li>
            <li><a href="https://coffeeplay.tv/login" className="hover:text-[#C67C2E] transition-colors">Central do Assinante</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Atendimento</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#25D366]" />
              <a href="https://wa.me/5521987998271" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">(21) 98799-8271</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#C67C2E]" />
              <a href="mailto:coffeeplayy@gmail.com" className="hover:text-[#C67C2E] transition-colors">coffeeplayy@gmail.com</a>
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
