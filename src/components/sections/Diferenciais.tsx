"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Star, Banknote } from "lucide-react";

const diferenciais = [
  {
    icon: Star,
    stat: "Nota 5",
    titulo: "Nota Máxima no MEC",
    descricao: "Reconhecimento máximo do Ministério da Educação, garantindo uma formação de excelência e diploma valorizado em todo o Brasil.",
  },
  {
    icon: Users,
    stat: "Presencial & EAD",
    titulo: "Modalidades Flexíveis",
    descricao: "Cursos presenciais em Sobral-CE e cursos a distância. Você escolhe como quer estudar.",
  },
  {
    icon: Banknote,
    stat: "FIES & FIES Social",
    titulo: "Financiamento Disponível",
    descricao: "Todos os cursos são elegíveis para FIES e FIES Social. Basta nota acima de 450 no ENEM e não zerar a redação.",
  },
  {
    icon: Building2,
    stat: "Sobral — CE",
    titulo: "Estrutura Completa",
    descricao: "Campus moderno na Rua José Lopes Ponte, 400. Laboratórios equipados, biblioteca e ambiente pensado para o seu aprendizado.",
  },
];

const formasIngresso = ["Nota do ENEM", "Prova Online", "Graduados", "Transferidos"];

export default function Diferenciais() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block text-[#0052FF] text-sm font-semibold tracking-widest uppercase mb-4">
            Por que a FLF?
          </span>
          <h2
            className="text-[#0A0A1A] leading-tight mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
            }}
          >
            Qualidade que o{" "}
            <span className="text-[#0052FF]">MEC comprova.</span>
            <br />
            Futuro que você constrói.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Nota 5 no MEC, FIES disponível em todos os cursos, presencial e EAD.
            Vem ser grande na Faculdade Luciano Feijão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl border border-gray-100 hover:border-[#0052FF]/30 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1 cursor-default bg-white"
            >
              <div className="w-13 h-13 w-14 h-14 rounded-xl bg-[#E8F0FF] flex items-center justify-center mb-5 group-hover:bg-[#0052FF] transition-colors duration-300">
                <item.icon size={24} className="text-[#0052FF] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="inline-block text-xs font-bold text-[#0052FF] bg-[#E8F0FF] px-3 py-1 rounded-full mb-3">
                {item.stat}
              </span>
              <h3
                className="text-[#0A0A1A] font-bold text-lg mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.descricao}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0052FF] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 rounded-2xl overflow-hidden border border-[#E8F0FF]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8F0FF]">
            {[
              { number: "Nota 5", label: "Conceito MEC" },
              { number: "13", label: "Cursos disponíveis" },
              { number: "FIES", label: "Todos os cursos elegíveis" }
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-8 py-7 text-center hover:bg-[#F0F5FF] transition-colors">
                <div
                  className="text-[#0052FF] mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="text-gray-400 text-sm font-medium">Formas de ingresso:</span>
          {formasIngresso.map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full border border-[#0052FF]/20 text-[#0052FF] text-sm font-semibold bg-[#E8F0FF]">
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
