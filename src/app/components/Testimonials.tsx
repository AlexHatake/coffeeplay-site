import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Star, User } from "lucide-react";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Abrangendo tablets e mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Cleaner on mobile
        }
      }
    ]
  };

  const testimonials = [
    { name: "João Silva", text: "Excelente serviço! Imagem perfeita e não trava nada." },
    { name: "Maria Oliveira", text: "Atendimento nota 10. Me ajudaram a configurar na TV rapidinho." },
    { name: "Pedro Santos", text: "Melhor IPTV que já usei. Preço justo e muita qualidade." },
    { name: "Ana Costa", text: "Muitos filmes e séries. As crianças adoram os desenhos." },
    { name: "Carlos Pereira", text: "Uso há 6 meses e nunca tive problemas. Recomendo!" },
    { name: "Fernanda Lima", text: "O guia de programação funciona direitinho. Adorei." },
    { name: "Rafael Souza", text: "Roda liso no 4G também. Muito bom pra quem viaja." },
    { name: "Patrícia Alves", text: "Cancelei minha TV a cabo e não me arrependo. Coffee Play é top." },
    { name: "Marcos Rocha", text: "Suporte muito atencioso. Resolveram minha dúvida na hora." },
    { name: "Juliana Mendes", text: "Qualidade 4K de verdade. Imagem cristalina na minha TV." },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#FFF8F0]">
      {/* Reduced padding on mobile to allow cards to be wider (90% width feel) */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Clientes Satisfeitos
          </h2>
          <p className="text-gray-500">Veja o que estão falando do Coffee Play</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-2 md:px-4 py-4 outline-none">
                {/* 
                   Card Optimization:
                   - h-full: Ensures consistent height
                   - mx-auto: Centers the card
                   - w-[95%]: Ensures it doesn't touch the very edges if padding is small, giving the 90-95% look
                */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-orange-100 h-full flex flex-col justify-between min-h-[240px] w-full md:w-auto mx-auto">
                  <div>
                    <div className="flex gap-1 text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                    </div>
                    {/* Added break-words, leading-relaxed for readability */}
                    <p className="text-gray-700 mb-6 italic text-base md:text-lg leading-relaxed break-words">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-[#C67C2E] shrink-0">
                        <User size={20} />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        .slick-dots li.slick-active button:before { color: #C67C2E !important; }
        .slick-prev:before, .slick-next:before { color: #C67C2E; }
        /* Fix for focus outline on click */
        .slick-slide:focus { outline: none; }
      `}</style>
    </section>
  );
};
