"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { eventos } from "@/data/flf";

export default function Eventos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()));
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="eventos" className="py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-[#0052FF] text-xs font-bold tracking-widest uppercase mb-3">
              Agenda FLF · 2026
            </span>
            <h2
              className="text-[#0A0A1A] leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Eventos que marcam
              <br />
              <span className="text-[#0052FF]">sua trajetória</span>
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 self-start sm:self-auto">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0052FF] hover:text-[#0052FF] transition-all duration-200"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="w-12 h-12 rounded-full bg-[#0052FF] flex items-center justify-center text-white hover:bg-[#003BCC] hover:scale-105 transition-all duration-200"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden -mx-4 px-4"
          ref={emblaRef}
        >
          <div className="flex gap-5">
            {eventos.map((evento, i) => (
              <div
                key={evento.id}
                className="flex-none w-[82vw] sm:w-[52%] lg:w-[36%] group"
              >
                {/* Image block */}
                <div className="relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={evento.imagem}
                    alt={evento.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 52vw, 36vw"
                  />

                  {/* Subtle bottom gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Date badge — top right */}
                  <div className="absolute top-3 right-3 bg-white rounded-xl px-3.5 py-2 text-center shadow-md min-w-[52px]">
                    <p
                      className="text-[#0A0A1A] font-black leading-none"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.25rem)",
                      }}
                    >
                      {evento.data}
                    </p>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wide mt-0.5">
                      {evento.mes}
                    </p>
                  </div>

                  {/* Category — bottom left */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm"
                      style={{ backgroundColor: evento.cor }}
                    >
                      {evento.categoria}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="text-[#0A0A1A] font-bold text-lg leading-snug mb-1 group-hover:text-[#0052FF] transition-colors duration-200"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {evento.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {evento.subtitulo}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom — dots + link */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-2 items-center">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Evento ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-7 h-2.5 bg-[#0052FF]"
                    : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>

          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0052FF] hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Quero participar
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}