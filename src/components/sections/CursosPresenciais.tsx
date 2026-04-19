"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { cursosPresenciais, formasIngresso } from "@/data/flf";
import { MapPin } from "lucide-react";

export default function CursosPresenciais() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cursos-presenciais" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-[#0052FF]" />
              <span className="text-[#0052FF] text-sm font-semibold tracking-widest uppercase">
                Sobral — CE
              </span>
            </div>
            <h2
              className="text-[#0A0A1A] leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
              }}
            >
              Cursos{" "}
              <span className="text-[#0052FF]">Presenciais</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base max-w-md">
              Viva a experiência completa do campus. Professores ativos no mercado, labs modernos e networking desde o 1º dia.
            </p>
          </div>

          <a
            href="#contato"
            className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 bg-[#0052FF] text-white rounded-xl font-bold text-sm hover:bg-[#003BCC] hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-100"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Inscreva-se →
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cursosPresenciais.map((curso, i) => (
            <motion.div
              key={curso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={curso.imagem}
                alt={curso.nome}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A66]/90 via-[#0052FF]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="text-white font-bold text-sm leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {curso.nome}
                </h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contato"
                  className="px-4 py-2 bg-white text-[#0052FF] rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors"
                >
                  Inscrever-se
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <span className="text-gray-400 text-sm font-medium">Formas de ingresso:</span>
          {formasIngresso.map((f) => (
            <span
              key={f}
              className="px-4 py-1.5 rounded-full border border-[#0052FF]/20 text-[#0052FF] text-sm font-semibold bg-[#E8F0FF]"
            >
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
