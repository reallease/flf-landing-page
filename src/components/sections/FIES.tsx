"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { fiesCards } from "@/data/flf";

export default function FIES() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [Autoplay({ delay: 3200, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="fies" className="py-24 lg:py-4 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative" style={{ width: 260 }}>
              <div className="absolute inset-0 bg-[#0052FF]/20 rounded-[3rem] blur-3xl scale-75 translate-y-8" />
              <div className="relative bg-[#0A0A1A] rounded-[2.8rem] p-3 shadow-2xl border border-white/10">
                <div className="flex justify-between items-center px-5 pt-1 pb-2">
                  <span className="text-white/70 text-[10px] font-semibold">9:41</span>
                  <div className="flex gap-1 items-center">
                    <div className="flex gap-0.5">
                      {[3,3,3,3].map((_, i) => (
                        <div key={i} className={`w-0.5 rounded-full bg-white/70`} style={{ height: 4 + i * 2 }} />
                      ))}
                    </div>
                    <div className="w-4 h-2 border border-white/50 rounded-sm ml-1">
                      <div className="w-3/4 h-full bg-white/70 rounded-sm" />
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-[2rem] overflow-hidden" style={{ height: 460 }}>
                  <div className="absolute top-[54px] left-5 right-5 z-20 flex gap-1">
                    {fiesCards.map((_, i) => (
                      <div key={i} className="flex-1 h-[2px] rounded-full bg-white/30 overflow-hidden">
                        <motion.div
                          className="h-full bg-white rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: i < selectedIndex ? "100%" : i === selectedIndex ? "100%" : "0%" }}
                          transition={{ duration: i === selectedIndex ? 3.2 : 0.1 }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-[62px] left-5 right-5 z-20 flex items-center gap-2 mt-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-[#0052FF] flex items-center justify-center">
                        <span className="text-white text-[8px] font-black">FLF</span>
                      </div>
                    </div>
                    <span className="text-white text-[11px] font-bold">flfeijao</span>
                    <span className="text-white/40 text-[10px] ml-auto">agora</span>
                  </div>

                  <div className="w-full h-full relative" ref={emblaRef} style={{ overflow: "hidden" }}>
                    <div className="flex h-full">
                      {fiesCards.map((card) => (
                        <div key={card.id} className="flex-none w-full h-full relative">
                          <Image
                            src={card.imagem}
                            alt={`FIES card ${card.id}`}
                            fill
                            className="object-cover object-center"
                            sizes="260px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center gap-2 px-4">
                    <div className="flex-1 border border-white/30 rounded-full px-3 py-1.5">
                      <span className="text-white/40 text-[10px]">Enviar mensagem...</span>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/60">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-20 h-1 bg-white/20 rounded-full" />
                </div>
              </div>

              <button
                onClick={scrollPrev}
                className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0052FF] hover:border-[#0052FF]/30 transition-all z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0052FF] shadow-lg flex items-center justify-center text-white hover:bg-[#003BCC] transition-all z-10"
              >
                <ChevronRight size={16} />
              </button>

              <div className="flex justify-center gap-2 mt-5">
                {fiesCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 h-2 bg-[#0052FF]" : "w-2 h-2 bg-[#0052FF]/25"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[#0052FF] text-sm font-semibold tracking-widest uppercase mb-5">
              Financiamento estudantil
            </span>
            <h2
              className="text-[#0A0A1A] leading-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
              }}
            >
              Realize sua
              <br />
              graduação com o{" "}
              <span className="text-[#0052FF]">FIES</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4E4FF]">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center flex-none">
                  <span className="text-white text-sm font-black">✓</span>
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Todos os cursos da FLF são elegíveis
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">FIES e FIES Social disponível para todos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4E4FF]">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center flex-none">
                  <span className="text-white text-sm font-black">✓</span>
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    O FIES atende a todos sem distinção
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Basta fazer o ENEM, ter nota acima de 450 e não zerar a redação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4E4FF]">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center flex-none">
                  <span className="text-white text-sm font-black">✓</span>
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-bold text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Processo seletivo simplificado
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    Nossa equipe te orienta em cada etapa do FIES.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:883112-1001"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#0052FF] text-white rounded-xl font-bold hover:bg-[#003BCC] hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Phone size={18} />
              88 3112-1001 — Saiba mais sobre o FIES
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
