import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const links = [
  { label: "Sobre a FLF", href: "#sobre" },
  { label: "Cursos Presenciais", href: "#cursos-presenciais" },
  { label: "Cursos EAD", href: "#cursos-ead" },
  { label: "FIES", href: "#fies" },
  { label: "Vídeos", href: "#videos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#001A66]">
      <div className="h-1 bg-gradient-to-r from-[#0052FF] via-[#4D8DFF] to-[#0052FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl px-5 py-4 inline-block mb-6 shadow-lg">
              <Image
                src="/images/logo-colorida.png"
                alt="Faculdade Luciano Feijão"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Transformando vidas através da educação de qualidade em Sobral, CE.
              Nota 5 no MEC. FIES e FIES Social disponíveis.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 text-blue-100 text-xs font-semibold border border-white/10">
                ⭐ Nota 5 MEC
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 text-blue-100 text-xs font-semibold border border-white/10">
                💙 FIES & FIES Social
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-blue-200/60 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4D8DFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:883112-1001" className="flex items-start gap-3 text-blue-200/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-[#0052FF]/40 flex items-center justify-center flex-none mt-0.5 group-hover:bg-[#0052FF] transition-colors">
                    <Phone size={14} className="text-[#4D8DFF] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-100">88 3112-1001</p>
                    <p className="text-xs text-blue-200/40">Central de Atendimento</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contato@flucianofeijao.com.br" className="flex items-start gap-3 text-blue-200/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-[#0052FF]/40 flex items-center justify-center flex-none mt-0.5 group-hover:bg-[#0052FF] transition-colors">
                    <Mail size={14} className="text-[#4D8DFF] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-100 break-all">contato@flucianofeijao.com.br</p>
                    <p className="text-xs text-blue-200/40">Secretaria</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-200/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0052FF]/40 flex items-center justify-center flex-none mt-0.5">
                    <MapPin size={14} className="text-[#4D8DFF]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-100">Rua José Lopes Ponte, 400</p>
                    <p className="text-xs text-blue-200/40">Dom Expedito — Sobral, CE</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-200/60">
                  <div className="w-8 h-8 rounded-lg bg-[#0052FF]/40 flex items-center justify-center flex-none mt-0.5">
                    <Clock size={14} className="text-[#4D8DFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Seg–Sex: 7h às 22h</p>
                    <p className="text-sm text-blue-100">Sáb: 8h às 17h</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Redes Sociais
            </h4>
            <ul className="space-y-3 mb-8">
              {[
                { label: "Instagram", handle: "@flfeijao", href: "https://instagram.com/flfeijao", icon: Instagram },
                { label: "Facebook", handle: "/facebook.com/flfeijao", href: "https://facebook.com/flfeijao", icon: Facebook },
                { label: "Twitter", handle: "@flfeijao", href: "https://twitter.com/flfeijao", icon: Twitter },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-200/60 hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#0052FF] group-hover:border-[#0052FF] transition-all">
                      <s.icon size={15} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-100 group-hover:text-white transition-colors">{s.label}</p>
                      <p className="text-xs">{s.handle}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/558831121001?text=Olá! Quero saber mais sobre as inscrições para 2026.2."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white text-sm font-bold transition-all hover:scale-105 shadow-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/40 text-sm text-center">
            © 2026 Faculdade Luciano Feijão. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-blue-200/40 hover:text-blue-200 text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-blue-200/40 hover:text-blue-200 text-sm transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
