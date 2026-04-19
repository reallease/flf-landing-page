import { z } from "zod";

export const inscricaoSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .max(15, "WhatsApp inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Apenas números e caracteres de telefone"),
  curso: z.string().min(1, "Selecione um curso"),
  modalidade: z.enum(["Presencial", "EAD", "Híbrido"], {
    errorMap: () => ({ message: "Selecione uma modalidade" }),
  }),
});

export type InscricaoFormData = z.infer<typeof inscricaoSchema>;
