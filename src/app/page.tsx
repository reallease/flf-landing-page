import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Diferenciais from "@/components/sections/Diferenciais";
import CursosPresenciais from "@/components/sections/CursosPresenciais";
import CursosEAD from "@/components/sections/CursosEAD";
import FIES from "@/components/sections/FIES";
import Eventos from "@/components/sections/Eventos";
import FormularioInscricao from "@/components/sections/FormularioInscricao";
import Localizacao from "@/components/sections/Localizacao";
import Videos from "@/components/sections/Videos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Diferenciais />
      <CursosPresenciais />
      <CursosEAD />
      <FIES />
      <Videos />
      <Eventos />
      <FormularioInscricao />
      <Localizacao />
      <Footer />
    </main>
  );
}
