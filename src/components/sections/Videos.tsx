"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    youtubeId: "H_DRnaMUgcQ",
    titulo: "Institucional FLF",
    subtitulo: "Conheça a Faculdade Luciano Feijão",
    duracao: "2:30",
    destaque: true,
  },
  {
    id: 2,
    youtubeId: "lRSw497AjJ0",
    titulo: "Nossa História",
    subtitulo: "Trajetória e valores da FLF",
    duracao: "3:15",
    destaque: false,
  }
];

function Thumbnail({ youtubeId }: { youtubeId: string }) {
  return (
    <img
      src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
      alt="Thumbnail"
      className="w-full h-full object-cover"
      onError={(e) => {
        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      }}
    />
  );
}

export default function Videos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [videoAberto, setVideoAberto] = useState<string | null>(null);

  const principal = videos.find((v) => v.destaque);
  const secundarios = videos.filter((v) => !v.destaque);

  return (
    <>
      <section id="videos" className="py-24 lg:py-32 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block text-[#0052FF] text-xs font-bold tracking-widest uppercase mb-3">
              FLF em vídeo
            </span>
            <h2
              className="text-[#0A0A1A] leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Conheça a FLF por dentro
              <br />
              <span className="text-[#0052FF]">antes de entrar.</span>
            </h2>
          </motion.div>

          {/* Layout: vídeo principal + lista lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Vídeo principal — ocupa 2 colunas */}
            {principal && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <button
                  onClick={() => setVideoAberto(principal.youtubeId)}
                  className="group relative w-full rounded-2xl overflow-hidden block"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Thumbnail youtubeId={principal.youtubeId} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0052FF]/30 group-hover:bg-[#0052FF]/20 transition-colors duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={30} className="text-[#0052FF] ml-1.5" fill="#0052FF" />
                      </div>
                    </div>
                  </div>

                  {/* Info overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
                      Vídeo Institucional
                    </span>
                    <h3
                      className="text-white font-bold text-xl mt-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {principal.titulo}
                    </h3>
                    <p className="text-white/70 text-sm mt-0.5">{principal.subtitulo}</p>
                  </div>
                </button>
              </motion.div>
            )}

            {/* Vídeos secundários — coluna lateral */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Card de destaque acima dos vídeos */}
              <div className="rounded-2xl bg-[#0052FF] p-6 text-white">
                <p
                  className="font-bold text-lg leading-snug mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Sua carreira começa com a escolha certa.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Nota 5 no MEC. FIES disponível. Inscrições abertas para 2026.2.
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0052FF] rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Garantir minha vaga →
                </a>
              </div>

              {/* Vídeos secundários */}
              {secundarios.map((video, i) => (
                <motion.button
                  key={video.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onClick={() => setVideoAberto(video.youtubeId)}
                  className="group relative rounded-2xl overflow-hidden text-left"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Thumbnail youtubeId={video.youtubeId} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play pequeno */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <Play size={18} className="text-[#0052FF] ml-0.5" fill="#0052FF" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {video.titulo}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{video.subtitulo}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal do vídeo */}
      <AnimatePresence>
        {videoAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoAberto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoAberto}?autoplay=1&rel=0`}
                title="Vídeo FLF"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              />
              <button
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setVideoAberto(null)}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}