import React, { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../content/site";

export const FAQ = () => {
  const [open, setOpen] = useState("item-0");

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const value = `item-${index}`;
            const isOpen = open === value;
            return (
              <div key={value} className="border border-gray-200 rounded-lg overflow-hidden">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? "" : value)}
                    className={`w-full flex justify-between items-center p-6 text-left font-bold hover:bg-gray-50 transition-colors group ${isOpen ? "text-[#C67C2E]" : "text-gray-800"}`}
                  >
                    {item.q}
                    <Plus className={`text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45 text-[#C67C2E]" : ""}`} />
                  </button>
                </h3>
                <div hidden={!isOpen} className="text-gray-600 px-6 pb-6 pt-2 bg-gray-50/50">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
