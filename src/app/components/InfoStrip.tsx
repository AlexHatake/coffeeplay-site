import React from "react";
import { MonitorPlay, Wifi, Lock, Headset } from "lucide-react";

export const InfoStrip = () => {
  const features = [
    {
      icon: <MonitorPlay className="w-10 h-10" />,
      title: "Alta Definição",
      desc: "Canais em 4K, Full HD e HD"
    },
    {
      icon: <Wifi className="w-10 h-10" />,
      title: "Sem Travamentos",
      desc: "Servidores super estáveis"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Totalmente Seguro",
      desc: "Privacidade garantida"
    },
    {
      icon: <Headset className="w-10 h-10" />,
      title: "Suporte 24/7",
      desc: "Atendimento humanizado"
    }
  ];

  return (
    <section className="bg-[#C67C2E] py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 group hover:bg-white/10 rounded-xl transition-colors">
                    <div className="mb-4 p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                        {f.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                    <p className="text-white/80 text-sm">{f.desc}</p>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};
