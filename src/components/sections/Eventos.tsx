"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventos } from "@/data/flf";

const categoriaCor: Record<string, string> = {
  Acadêmico: "bg-blue-100 text-blue-700",
  Carreira: "bg-emerald-100 text-emerald-700",
  Congresso: "bg-purple-100 text-purple-700",
};

export default function Eventos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="eventos" className="py-24 lg:py-32 bg-[#0A0A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
        >
          <div>
            <span className="inline-block text-[#4D8DFF] text-sm font-semibold tracking-widest uppercase mb-4">
              Agenda FLF
            </span>
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Próximos
              <br />
              <span className="text-[#4D8DFF]">Eventos</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-xs">
            Palestras, congressos e feiras que vão turbinar seu currículo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {eventos.map((evento, i) => (
            <motion.div
              key={evento.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[#0052FF]/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={evento.imagem}
                  alt={evento.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoriaCor[evento.categoria]}`}>
                    {evento.categoria}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#111827]">
                <h3
                  className="text-white font-bold text-lg mb-3 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {evento.titulo}
                </h3>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={13} className="text-[#4D8DFF] flex-none" />
                    {evento.data}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={13} className="text-[#4D8DFF] flex-none" />
                    {evento.local}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {evento.descricao}
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-[#4D8DFF] text-sm font-bold hover:gap-3 transition-all duration-200"
                >
                  Quero participar
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
