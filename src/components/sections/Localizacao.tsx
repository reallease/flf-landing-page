import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — info */}
          <div>
            <span className="inline-block bg-[#0052FF]/10 text-[#0052FF] text-sm font-semibold tracking-widest uppercase mb-5 px-3 py-1 rounded-full">
              Onde nos encontrar
            </span>

            <h2
              className="text-[#0A0A1A] leading-tight mb-8"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              }}
            >
              Venha nos
              <br />
              conhecer pessoalmente
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-none">
                  <MapPin size={18} className="text-[#0052FF]" />
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-semibold text-base">Endereço</p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Rua José Lopes Ponte, 400
                    <br />
                    Dom Expedito — Sobral, CE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-none">
                  <Phone size={18} className="text-[#0052FF]" />
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-semibold text-base">Telefone</p>
                  <a
                    href="tel:883112-1001"
                    className="text-gray-600 text-sm mt-0.5 hover:text-[#0052FF] transition-colors"
                  >
                    88 3112-1001
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-none">
                  <Clock size={18} className="text-[#0052FF]" />
                </div>
                <div>
                  <p className="text-[#0A0A1A] font-semibold text-base">
                    Horário de Atendimento
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Segunda a Sexta: 7h às 22h
                    <br />
                    Sábado: 8h às 17h
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0052FF] text-white rounded-xl font-bold text-sm hover:bg-[#003BCC] hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <Navigation size={16} />
              Abrir no Google Maps
            </a>
          </div>

          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/localizacao.jpg"
                alt="Localização"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0052FF] flex items-center justify-center flex-none">
                    <MapPin size={18} className="text-white" fill="white" />
                  </div>
                  <div>
                    <p
                      className="text-[#0A0A1A] font-bold text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Rua José Lopes Ponte, 400
                    </p>
                    <p className="text-gray-500 text-xs">Dom Expedito — Sobral, CE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#0052FF]/20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-[#0052FF]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}