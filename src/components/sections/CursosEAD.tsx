"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { cursosEAD } from "@/data/flf";
import { Wifi, Zap } from "lucide-react";

export default function CursosEAD() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cursos-ead" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wifi size={16} className="text-[#0052FF]" />
              <span className="text-[#0052FF] text-sm font-semibold tracking-widest uppercase">
                100% Online · Estude de qualquer lugar
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
              <span className="text-[#0052FF]">a Distância</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base max-w-md">
              Mesma qualidade FLF, nota 5 no MEC, com a flexibilidade que você precisa para estudar no seu tempo.
            </p>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="self-start lg:self-auto flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-[#0052FF] bg-white"
          >
            <Zap size={24} className="text-[#0052FF]" fill="#0052FF" />
            <div>
              <div
                className="text-[#0052FF] font-bold text-2xl leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                até 70%
              </div>
              <div className="text-gray-400 text-xs font-medium">de desconto no EAD</div>
            </div>
          </motion.div> */}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cursosEAD.map((curso, i) => (
            <motion.div
              key={curso.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                <Image
                  src={curso.imagem}
                  alt={curso.nome}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A66]/85 via-[#0052FF]/10 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0052FF] text-xs font-bold">
                    EAD
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#0052FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#contato"
                    className="px-4 py-2 bg-white text-[#0052FF] rounded-lg text-xs font-bold"
                  >
                    Inscrever-se
                  </a>
                </div>
              </div>

              <h3
                className="text-[#0A0A1A] font-bold text-sm leading-tight px-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {curso.nome}
              </h3>
              <p className="text-gray-400 text-xs mt-0.5 px-1">Nota 5 MEC · Online</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#0052FF]"
        >
          <div>
            <p className="text-white font-bold text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              EAD com até 70% de desconto. Vagas limitadas para 2026.2.
            </p>
            <p className="text-white/70 text-sm mt-0.5">Não perca essa oportunidade.</p>
          </div>
          <a
            href="#contato"
            className="flex-none px-8 py-3.5 bg-white text-[#0052FF] rounded-xl font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all duration-200 whitespace-nowrap"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Quero minha vaga →
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
