import React from "react";
import { Play, ShieldCheck, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-orange-50 to-white overflow-hidden scroll-mt-24">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C67C2E]/5 skew-x-12 transform origin-top-right translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C67C2E]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="max-w-xl hero-copy">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#C67C2E] font-bold text-xs uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C67C2E] animate-pulse" />
            Melhor IPTV do Brasil
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            IPTV Premium com <br />
            <span className="text-[#C67C2E]">Filmes, Séries e TV</span> <br />
            em 4K Ultra HD
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Tenha acesso a mais de 90.000 conteúdos. A melhor estabilidade do mercado, sem travamentos e com suporte especializado 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/5521991784378"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C67C2E] hover:bg-[#A66624] text-white text-lg font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Play fill="white" size={18} />
              COMEÇAR AGORA
            </a>
            <a
              href="https://wa.me/5521991784378"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-700 hover:text-[#C67C2E] border-2 border-gray-200 hover:border-[#C67C2E] text-lg font-bold rounded-lg transition-all flex items-center justify-center"
            >
              Teste Grátis 4 Horas
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#C67C2E]" size={20} />
              Compra Segura
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-[#C67C2E]" size={20} />
              Ativação Imediata
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:h-[600px] flex items-center justify-center hero-visual">
            <div className="relative z-10 w-full max-w-lg">
                <img 
                    src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1080&auto=format&fit=crop" 
                    alt="TV com filmes e séries" 
                    className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                
                {/* Floating Badges */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">100% Estável</p>
                        <p className="text-xs text-gray-500">Zero travamentos</p>
                    </div>
                </div>
            </div>
            
            {/* Decor Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>
      <style>{`
        @keyframes hero-copy-in {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes hero-visual-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: none; }
        }
        .hero-copy { animation: hero-copy-in 0.8s ease both; }
        .hero-visual { animation: hero-visual-in 0.8s ease 0.2s both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-copy, .hero-visual { animation: none; }
        }
      `}</style>
    </section>
  );
};
