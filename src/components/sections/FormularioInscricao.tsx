"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido").regex(/^[\d\s\(\)\-\+]+$/, "Apenas números"),
  curso: z.string().min(1, "Selecione um curso"),
});

type FormData = z.infer<typeof schema>;

const todosOsCursos = [
  "Administração (Presencial)",
  "Arquitetura e Urbanismo (Presencial)",
  "Direito (Presencial)",
  "Enfermagem (Presencial)",
  "Engenharia Civil (Presencial)",
  "Medicina (Presencial)",
  "Psicologia (Presencial)",
  "Odontologia (Presencial)",
  "Administração (EAD)",
  "Educação Física (EAD)",
  "Pedagogia (EAD)",
  "Recursos Humanos (EAD)",
  "Serviço Social (EAD)",
];

const inputClass = (hasError: boolean) =>
  cn(
    "w-full px-4 py-3.5 rounded-xl border text-gray-800 text-sm transition-all duration-200 outline-none bg-white/80",
    "placeholder:text-gray-400 focus:ring-2 focus:ring-white/40 focus:border-white/60",
    hasError ? "border-red-300/60" : "border-white/30"
  );

export default function FormularioInscricao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1600));
    console.log("Lead:", data);
    toast.success("Inscrição enviada! Nossa equipe entrará em contato em breve.", { duration: 5000 });
    reset();
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden grain" ref={ref}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0041CC 0%, #0052FF 60%, #003299 100%)" }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/8" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-badge" />
              Inscrições abertas — 2026.2
            </span>
            <h2
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              }}
            >
              O semestre 2026.2
              <br />
              começa em breve.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              As vagas são limitadas. Preencha o formulário e nossa equipe
              entrará em contato em até 24h para orientar você no processo.
            </p>

            <div className="space-y-3.5">
              {[
                "Sem taxa de inscrição",
                "Processo seletivo simplificado",
                "FIES e FIES Social disponíveis",
                "Resposta em até 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-400 flex-none" />
                  <span className="text-white/80 text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20">
              <h3
                className="text-[#0A0A1A] text-2xl font-bold mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Garantir minha vaga
              </h3>
              <p className="text-gray-400 text-sm mb-7">
                Preencha os dados para iniciar seu processo seletivo.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome completo *</label>
                  <input
                    {...register("nome")}
                    type="text"
                    placeholder="Seu nome completo"
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl border text-gray-800 text-sm transition-all outline-none bg-white",
                      "placeholder:text-gray-400 focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]",
                      errors.nome ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                    )}
                  />
                  {errors.nome && <p className="mt-1.5 text-xs text-red-500">{errors.nome.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="seu@email.com"
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl border text-gray-800 text-sm transition-all outline-none bg-white",
                      "placeholder:text-gray-400 focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]",
                      errors.email ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                    )}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp *</label>
                  <input
                    {...register("whatsapp")}
                    type="tel"
                    placeholder="(88) 9 0000-0000"
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl border text-gray-800 text-sm transition-all outline-none bg-white",
                      "placeholder:text-gray-400 focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]",
                      errors.whatsapp ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                    )}
                  />
                  {errors.whatsapp && <p className="mt-1.5 text-xs text-red-500">{errors.whatsapp.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Curso de interesse *</label>
                  <select
                    {...register("curso")}
                    defaultValue=""
                    className={cn(
                      "w-full px-4 py-3.5 rounded-xl border text-gray-800 text-sm transition-all outline-none bg-white cursor-pointer",
                      "focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]",
                      errors.curso ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <option value="" disabled>Selecione seu curso...</option>
                    <optgroup label="── Cursos Presenciais ──">
                      {todosOsCursos.filter(c => c.includes("Presencial")).map(c => (
                        <option key={c} value={c}>{c.replace(" (Presencial)", "")}</option>
                      ))}
                    </optgroup>
                    <optgroup label="── Cursos EAD ──">
                      {todosOsCursos.filter(c => c.includes("EAD")).map(c => (
                        <option key={c} value={c}>{c.replace(" (EAD)", "")} — EAD</option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.curso && <p className="mt-1.5 text-xs text-red-500">{errors.curso.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0052FF] hover:bg-[#003BCC] disabled:opacity-60 text-white rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-200 mt-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                  ) : (
                    "Quero garantir minha vaga →"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-2">
                  Ao se inscrever, você concorda com nossa{" "}
                  <a href="#" className="text-[#0052FF] underline">política de privacidade</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
