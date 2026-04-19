import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faculdade Luciano Feijão — Inscrições Abertas 2026.2",
  description:
    "Transforme sua vida na FLF. Nota 5 no MEC, cursos presenciais e EAD, FIES disponível. Inscrições abertas para o semestre 2026.2 em Sobral, CE.",
  keywords: [
    "faculdade luciano feijao",
    "FLF",
    "Sobral CE",
    "graduação",
    "2026",
    "inscrições abertas",
    "FIES",
    "cursos presenciais",
    "EAD",
  ],
  openGraph: {
    title: "Faculdade Luciano Feijão — Inscrições Abertas 2026.2",
    description: "Nota 5 no MEC. FIES disponível. Inscreva-se agora.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0052FF",
              color: "white",
              border: "none",
              fontFamily: "'DM Sans', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
