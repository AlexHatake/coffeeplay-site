import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

export const Testimonials = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,

  // ✅ MOBILE FIRST
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,

  arrows: false,          // sem setas no mobile
  centerMode: false,
  variableWidth: false,
  adaptiveHeight: true,  // evita cortar texto

  responsive: [
    {
      breakpoint: 768, // tablets
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    },
    {
      breakpoint: 1280, // desktop
      settings: {
        slidesToShow: 3,
        arrows: true
      }
    }
  ]
};


  const testimonials = [
    { 
      name: "João Silva", 
      text: "Excelente serviço! Imagem perfeita e não trava nada.", 
      image: "https://images.unsplash.com/photo-1626790890768-4c246c6417cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGJyYXppbGlhbnxlbnwxfHx8fDE3NzA0MzczNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Maria Oliveira", 
      text: "Atendimento nota 10. Me ajudaram a configurar na TV rapidinho.", 
      image: "https://images.unsplash.com/photo-1693737001080-f49a0f756365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGdvbWFuJTIwYnJhemlsaWFufGVufDF8fHx8MTc3MDQzNzM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Pedro Santos", 
      text: "Melhor IPTV que já usei. Preço justo e muita qualidade.", 
      image: "https://images.unsplash.com/photo-1605298046196-e205d0d699d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwMzUwMTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Ana Costa", 
      text: "Muitos filmes e séries. As crianças adoram os desenhos.", 
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA0MjQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Carlos Pereira", 
      text: "Uso há 6 meses e nunca tive problemas. Recomendo!", 
      image: "https://images.unsplash.com/photo-1695485121912-25c7ea05119c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGNhc3VhbHxlbnwxfHx8fDE3NzAzNjEwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Fernanda Lima", 
      text: "O guia de programação funciona direitinho. Adorei.", 
      image: "https://images.unsplash.com/photo-1609091289242-735df7a2207a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY2FzdWFsfGVufDF8fHx8MTc3MDQzNzM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Rafael Souza", 
      text: "Roda liso no 4G também. Muito bom pra quem viaja.", 
      image: "https://images.unsplash.com/photo-1610741338724-8b60c2983768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMGdsYXNzZXN8ZW58MXx8fHwxNzcwNDM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Patrícia Alves", 
      text: "Cancelei minha TV a cabo e não me arrependo. Coffee Play é top.", 
      image: "https://images.unsplash.com/photo-1675894666694-133d7406b636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NzAzNDUyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Marcos Rocha", 
      text: "Suporte muito atencioso. Resolveram minha dúvida na hora.", 
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMH1hbiUyMGZyaWVuZGx5fGVufDF8fHx8MTc3MDQzNzM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      name: "Juliana Mendes", 
      text: "Qualidade 4K de verdade. Imagem cristalina na minha TV.", 
      image: "https://images.unsplash.com/photo-1607749091702-1bab1be215a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwZnJpZW5kbHl8ZW58MXx8fHwxNzcwNDM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#FFF8F0] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Clientes Satisfeitos
          </h2>
          <p className="text-gray-500 text-base md:text-lg">Veja o que estão falando do Coffee Play</p>
        </div>

        {/* 
            Container do Slider 
            No mobile, usamos o padding e margin para garantir que não haja overflow horizontal 
            indesejado fora do slider.
        */}
        <div className="mx-auto max-w-6xl pb-10">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="outline-none py-2">
                {/* 
                    Wrapper para centralizar o card no slide. 
                    Isso garante que mesmo que o slide seja 100% da tela, 
                    o card tenha a largura controlada.
                */}
                <div className="flex justify-center w-full">
                  <div 
                    className="bg-white rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center text-center relative"
                    style={{
                      // Regras específicas de largura para mobile/desktop
                      width: 'min(90vw, 340px)', 
                      // Padding interno fixo de 20px
                      padding: '20px',
                      height: 'auto'
                    }}
                  >
                    
                    {/* Estrelas */}
                    <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} fill="currentColor" size={20} />
                      ))}
                    </div>

                    {/* Texto do Depoimento 
                        - text-base (16px)
                        - leading-relaxed (aprox 1.625) ou custom style
                        - break-words para evitar overflow, mas break-normal para fluxo comum
                    */}
                    <p
  className="text-gray-700 mb-6 italic font-medium"
  style={{
    fontSize: '16px',
    lineHeight: '1.4',
    wordBreak: 'normal',
    overflowWrap: 'anywhere',
    whiteSpace: 'normal'
  }}
>
  “{t.text}”
</p>
  

                    {/* Avatar e Nome */}
                    <div className="flex flex-col items-center gap-2 mt-auto">
                      <div className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-orange-200 shadow-sm shrink-0">
                        <img 
                          src={t.image} 
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col w-full px-2">
                        <span className="font-bold text-gray-900 text-base truncate w-full block">
                          {t.name}
                        </span>
                        <span className="text-[10px] md:text-xs text-orange-600 font-semibold uppercase tracking-wider">
                          Cliente Verificado
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        /* Customização dos Dots para Mobile */
        .slick-dots {
          bottom: -35px;
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #E5E7EB; /* Cinza claro */
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #C67C2E !important; /* Laranja da marca */
          opacity: 1;
        }
        
        /* Ajuste de espaçamento das setas no Desktop */
        .slick-prev { left: -40px; }
        .slick-next { right: -40px; }
        
        /* Remove outline no clique */
        .slick-slide:focus { outline: none; }
        .slick-slide > div { outline: none; }
      `}</style>
    </section>
  );
};
