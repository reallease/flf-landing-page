"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cursos-presenciais", label: "Presencial" },
  { href: "#cursos-ead", label: "EAD" },
  { href: "#fies", label: "FIES" },
  { href: "#eventos", label: "Eventos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo — troca automaticamente com base no scroll */}
            <a href="#" className="flex items-center flex-none">
              {/* Logo BRANCA: visível quando navbar está transparente (sobre o hero azul) */}
              <Image
                src="/images/logo-branca.png"
                alt="Faculdade Luciano Feijão"
                width={140}
                height={44}
                className={cn(
                  "h-9 w-auto object-contain transition-all duration-300 absolute",
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                priority
              />
              {/* Logo COLORIDA: visível quando navbar está scrollada (fundo branco) */}
              <Image
                src="/images/logo-colorida.png"
                alt="Faculdade Luciano Feijão"
                width={140}
                height={44}
                className={cn(
                  "h-9 w-auto object-contain transition-all duration-300",
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                priority
              />
              {/* Spacer para manter o layout estável */}
              <div className="w-[140px] h-9 invisible" aria-hidden />
            </a>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-all duration-200",
                    link.label === "FIES"
                      ? cn(
                          "font-bold px-3 py-1.5 rounded-lg",
                          scrolled
                            ? "bg-[#E8F0FF] text-[#0052FF]"
                            : "bg-white/20 text-white backdrop-blur-sm"
                        )
                      : cn(
                          "font-medium",
                          scrolled
                            ? "text-gray-600 hover:text-[#0052FF]"
                            : "text-white/90 hover:text-white"
                        )
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contato"
                className={cn(
                  "hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95",
                  scrolled
                    ? "bg-[#0052FF] text-white hover:bg-[#003BCC] shadow-lg shadow-blue-100"
                    : "bg-white text-[#0052FF] hover:bg-blue-50 shadow-lg shadow-black/10"
                )}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Garanta sua Vaga →
              </a>
              <button
                className={cn(
                  "xl:hidden p-2 rounded-lg transition-colors",
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 xl:hidden overflow-y-auto"
          >
            {/* Logo colorida no menu mobile */}
            <div className="mb-8">
              <Image
                src="/images/logo-colorida.png"
                alt="Faculdade Luciano Feijão"
                width={150}
                height={44}
                className="h-10 w-auto"
              />
            </div>

            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "py-4 text-lg border-b border-gray-100 transition-colors",
                    link.label === "FIES"
                      ? "text-[#0052FF] font-bold"
                      : "text-gray-800 font-medium hover:text-[#0052FF]"
                  )}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contato"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="mt-6 w-full py-4 bg-[#0052FF] text-white text-center rounded-xl font-bold text-lg hover:bg-[#003BCC] transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Garanta sua Vaga →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}