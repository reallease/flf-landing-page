// Cursos Presenciais
export interface CursoModalidade {
  id: number;
  nome: string;
  slug: string;
  imagem: string;
}

export const cursosPresenciais: CursoModalidade[] = [
  { id: 1, nome: "Medicina", slug: "medicina", imagem: "/images/cursos/medicina.jpg" },
  { id: 2, nome: "Direito", slug: "direito", imagem: "/images/cursos/direito.jpg" },
  { id: 3, nome: "Enfermagem", slug: "enfermagem", imagem: "/images/cursos/enfermagem.jpg" },
  { id: 4, nome: "Odontologia", slug: "odontologia", imagem: "/images/cursos/odontologia.jpg" },
  { id: 5, nome: "Psicologia", slug: "psicologia", imagem: "/images/cursos/psicologia.jpg" },
  { id: 6, nome: "Administração", slug: "administracao", imagem: "/images/cursos/administracao.jpg" },
  { id: 7, nome: "Arquitetura e Urbanismo", slug: "arquitetura", imagem: "/images/cursos/arquitetura.jpg" },
  { id: 8, nome: "Engenharia Civil", slug: "engenharia", imagem: "/images/cursos/engenharia.jpg" },
];

export const cursosEAD: CursoModalidade[] = [
  { id: 9, nome: "Administração", slug: "administracao-ead", imagem: "/images/cursos/administracao-ead.jpg" },
  { id: 10, nome: "Educação Física", slug: "educacao-fisica", imagem: "/images/cursos/educacao-fisica.jpg" },
  { id: 11, nome: "Pedagogia", slug: "pedagogia", imagem: "/images/cursos/pedagogia.jpg" },
  { id: 12, nome: "Recursos Humanos", slug: "recursos-humanos", imagem: "/images/cursos/recursos-humanos.jpg" },
  { id: 13, nome: "Serviço Social", slug: "servico-social", imagem: "/images/cursos/servico-social.jpg" },
];

export const formasIngresso = [
  "Nota do ENEM",
  "Prova Online",
  "Graduados",
  "Transferidos",
];

export interface Evento {
  id: number;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

export const eventos = [
  {
    id: 1,
    titulo: "VII Semana de Enfermagem",
    subtitulo: "Ética, Técnica, Inovação e Política na Enfermagem",
    data: "Em breve",
    mes: "2026",
    categoria: "Saúde",
    cor: "#10B981",
    imagem: "/images/eventos/semana-enfermagem.jpg",
  },
  {
    id: 2,
    titulo: "III SEPRIS",
    subtitulo: "Seminário de Propriedade Intelectual e Inovação de Sobral",
    data: "24",
    mes: "Abril",
    categoria: "Inovação",
    cor: "#0052FF",
    imagem: "/images/eventos/sepris.jpg",
  },
  {
    id: 3,
    titulo: "XII SEMIC",
    subtitulo: "O Futuro do Trabalho na Sociedade Algorítmica",
    data: "26–27",
    mes: "Maio",
    categoria: "Científico",
    cor: "#F97316",
    imagem: "/images/eventos/semic.png",
  },
  {
    id: 4,
    titulo: "Aula Magna",
    subtitulo: "Mediação e as Novas Competências Jurídicas",
    data: "11",
    mes: "Março",
    categoria: "Direito",
    cor: "#8B5CF6",
    imagem: "/images/eventos/aula-magna.jpg",
  },
];

// cards dos FIES
export const fiesCards = [
  {
    id: 1,
    tipo: "logo",
    imagem: "/images/fies/logo-fies.jpg",
  },
  {
    id: 2,
    tipo: "pergunta",
    imagem: "/images/fies/pergunta-quem.jpg",
    pergunta: "Quem pode cursar sua graduação com FIES?",
  },
  {
    id: 3,
    tipo: "resposta",
    imagem: "/images/fies/resposta-todos.jpg",
    resposta: "O FIES atende a todos sem distinção.",
    detalhe: "Basta fazer o ENEM, ter nota superior a 450 pontos e não zerar redação.",
  },
  {
    id: 4,
    tipo: "pergunta",
    imagem: "/images/fies/pergunta-cursos.jpg",
    pergunta: "Quais cursos da FLF o FIES abrange?",
  },
  {
    id: 5,
    tipo: "resposta",
    imagem: "/images/fies/todos-cursos.jpg",
    resposta: "Todos os cursos da FLF são elegíveis para o FIES.",
    detalhe: "Basta preencher os requisitos que o processo seletivo do FIES pede.",
  },
];

// alguns destaques do instagram
export const instagramDestaques = [
  { id: 1, imagem: "/images/insta/destaque1.jpg", alt: "Processo Seletivo 2026.1" },
  { id: 2, imagem: "/images/insta/destaque2.jpg", alt: "Inscrições Abertas" },
  { id: 3, imagem: "/images/insta/destaque3.jpg", alt: "Cursos Presenciais e EAD" },
  { id: 4, imagem: "/images/insta/destaque4.jpg", alt: "Grade de Cursos FLF" },
];
