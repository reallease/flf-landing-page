"use client";

import { motion } from "framer-motion";
import { Star, Users, Trophy, GraduationCap } from "lucide-react";
import Image from "next/image";

const stagger = {
  container: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

const trustItems = [
  { icon: Star, label: "Nota 5 no MEC" },
  { icon: GraduationCap, label: "FIES & FIES Social" },
  { icon: Users, label: "Cursos Presenciais e EAD" },
  { icon: Trophy, label: "Melhor de Sobral" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=85"
          alt="Campus UniVista"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/95 via-[#0041CC]/90 to-[#001A66]/95" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={stagger.item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-badge" />
              INSCRIÇÕES ABERTAS · SEMESTRE 2026.2
            </span>
          </motion.div>

          <motion.h1
            variants={stagger.item}
            className="text-white leading-[1.05] mb-6"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            }}
          >
            Sua carreira começa
            <br />
            <span className="text-white/70">com a escolha</span>
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #fff 30%, #a8c5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              certa.
            </span>
          </motion.h1>

          <motion.p
            variants={stagger.item}
            className="text-white/75 text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Mais de 20 anos formando profissionais que transformam o mercado.
            Inscreva-se agora para o semestre 2026.2 e dê o próximo passo
            para a carreira que você sempre quis.
          </motion.p>

          <motion.div
            variants={stagger.item}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0052FF] rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl shadow-black/20"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Inscrições Abertas
              <span className="text-xl">→</span>
            </a>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Ver Cursos ↓
            </a>
          </motion.div>

          <motion.div
            variants={stagger.item}
            className="flex flex-wrap gap-6"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-white/80">
                <item.icon size={18} className="text-white/60" />
                <span className="text-sm font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 lg:h-20">
          <path d="M0,80 L1440,80 L1440,30 Q1200,80 960,50 Q720,20 480,50 Q240,80 0,30 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
