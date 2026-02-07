import React from "react";
import { Tv, Smartphone, Box, Monitor, Cast } from "lucide-react";

export const Devices = () => {
  const devices = [
    { icon: <Tv size={40} />, title: "Smart TVs", desc: "Samsung, LG, Sony, Android TV" },
    { icon: <Box size={40} />, title: "TV Box", desc: "MXQ, Mi Box, Fire Stick, Roku" },
    { icon: <Smartphone size={40} />, title: "Smartphones", desc: "Android e iOS (iPhone/iPad)" },
    { icon: <Monitor size={40} />, title: "Computadores", desc: "Windows, Mac e Linux" },
    { icon: <Cast size={40} />, title: "Chromecast", desc: "Transmita do celular para a TV" },
  ];

  return (
    <section id="dispositivos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Compatível com <span className="text-[#C67C2E]">Tudo</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Não importa qual dispositivo você usa, o Coffee Play roda liso. Instale em segundos.
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {devices.map((device, index) => (
            <div key={index} className="w-48 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#C67C2E] mb-4 group-hover:bg-[#C67C2E] group-hover:text-white transition-colors">
                {device.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{device.title}</h3>
              <p className="text-xs text-gray-500">{device.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
