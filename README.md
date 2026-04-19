# Projeto Landing Page para a Faculdade Luciano Feijão — Divulgação de Campanha de Semestre 2026.2

## Stack

- **Next.js 15** (App Router + Turbopack)
- **TypeScript 5**
- **Tailwind CSS 3**
- **Framer Motion 11** — animações
- **Embla Carousel** — carrosseis de fotos
- **React Hook Form + Zod** — formulário
- **Sonner** — toast notifications
- **Lucide React** — ícones

## Como rodar o projeto?

### 1. Instalar dependências

```bash
npm install
```

### 2. Rode em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais + grain texture
│   ├── layout.tsx           # Fonts, metadata, Toaster
│   └── page.tsx             # Composição de todas as seções
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navbar fixa com scroll effect
│   │   └── Footer.tsx       # Footer completo com redes sociais e algumas informações
│   └── sections/
│       ├── CursosEAD.tsx            # Roteia e mostra todos os cursos EAD pegando de data/flf.ts
│       ├── CursosPrenciais.tsx            # Roteia e mostra todos os cursos Prenciais pegando de data/flf.ts
│       ├── Diferenciais.tsx         # Página para mostrar qualidades e informações sobre a FLF
│       ├── Eventos.tsx              # Roteia e mostra todos os eventos pegando de data/flf.ts
│       ├── FIES.tsx                 # Seção somente para o FIES, com perguntas e respostas do instagram
│       └── FormularioInscricao.tsx  # Formulário com React Hook Form + Zod para inscrição dos cursos
│       ├── Hero.tsx                 # Parte principal onde fica uma imagem de fundo e algumas informações
│       ├── Localizacao.tsx          # Seção onde tem informações sobre a localização e uma ação para o Google Maps
├── data/
│   └── flf.ts               # Gerencia imagens, textos e cursos
└── lib/
    ├── utils.ts             # cn() helper
    └── validations.ts       # Schema Zod do formulário
```