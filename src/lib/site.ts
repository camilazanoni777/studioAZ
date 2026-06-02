export const siteConfig = {
  name: "Studio Andrea Zanoni",
  shortName: "Andrea Zanoni",
  description:
    "Arquitetura e interiores premium para familias que desejam transformar seus espacos com sofisticacao, confianca e atendimento personalizado.",
  url: "https://studioandreazanoni.com.br",
  email: "contato@studioandreazanoni.com.br",
  instagram: "andreazanoni_arquiteta",
  whatsapp: "5561995589392",
  whatsappDisplay: "(61) 99558-9392",
  location: "Brasilia, DF",
  addressPlaceholder: "Endereco comercial a confirmar",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Servicos", href: "/servicos" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export const services = [
  {
    title: "Consultoria de Arquitetura",
    slug: "consultoria-de-arquitetura",
    text: "Orientacao estrategica para escolhas de layout, materiais, acabamentos e prioridades do projeto.",
    description:
      "Um atendimento objetivo e consultivo para clientes que precisam tomar decisoes com seguranca antes ou durante uma construcao, reforma ou transformacao de ambiente.",
    indicatedFor:
      "Familias que desejam direcionamento profissional sem iniciar, neste momento, um projeto completo.",
    benefits: [
      "Mais clareza para definir prioridades",
      "Reducao de escolhas impulsivas ou desalinhadas",
      "Orientacao sobre layout, acabamentos e ambientacao",
      "Direcao estetica coerente com a rotina da familia",
    ],
    whatsappText:
      "Ola, gostaria de solicitar uma consultoria de arquitetura com o Studio Andrea Zanoni.",
  },
  {
    title: "Projetos de Arquitetura",
    slug: "projetos-de-arquitetura",
    text: "Concepcao completa para construir ou reformar com clareza tecnica, estetica refinada e coerencia.",
    description:
      "Desenvolvimento de solucoes arquitetonicas para residencias, reformas e novos espacos, unindo planejamento, proporcao, funcionalidade e linguagem estetica.",
    indicatedFor:
      "Clientes que desejam construir, reformar ou reorganizar a estrutura dos espacos com acompanhamento profissional.",
    benefits: [
      "Projeto alinhado ao estilo de vida dos moradores",
      "Melhor aproveitamento de areas e circulacao",
      "Decisoes tecnicas e esteticas mais consistentes",
      "Base clara para execucao e proximas etapas",
    ],
    whatsappText:
      "Ola, gostaria de conversar sobre um projeto de arquitetura com o Studio Andrea Zanoni.",
  },
  {
    title: "Interiores",
    slug: "interiores",
    text: "Ambientes personalizados com curadoria de mobiliario, iluminacao, texturas e detalhes de alto padrao.",
    description:
      "Projeto de interiores para criar ambientes acolhedores, sofisticados e funcionais, com curadoria de materiais, mobiliario, iluminacao e composicao visual.",
    indicatedFor:
      "Familias que desejam renovar a experiencia de morar e criar ambientes com identidade, conforto e elegancia.",
    benefits: [
      "Ambientes mais coerentes e sofisticados",
      "Curadoria de materiais, cores e texturas",
      "Composicao funcional para a rotina da casa",
      "Sensacao de unidade entre os ambientes",
    ],
    whatsappText:
      "Ola, gostaria de falar sobre um projeto de interiores com o Studio Andrea Zanoni.",
  },
  {
    title: "Reformas e Ambientacao",
    slug: "reformas-e-ambientacao",
    text: "Transformacao de espacos existentes com planejamento, bom gosto e foco na experiencia da familia.",
    description:
      "Direcionamento para transformar ambientes existentes com escolhas inteligentes, ajustes de layout, acabamentos, iluminacao, mobiliario e decoracao.",
    indicatedFor:
      "Clientes que desejam atualizar a casa, melhorar ambientes especificos ou renovar a sensacao de morar.",
    benefits: [
      "Transformacao com planejamento e intencao",
      "Aproveitamento do potencial do espaco existente",
      "Melhoria de conforto, estetica e funcionalidade",
      "Menos retrabalho durante a reforma",
    ],
    whatsappText:
      "Ola, gostaria de conversar sobre reforma e ambientacao com o Studio Andrea Zanoni.",
  },
  {
    title: "Acompanhamento Personalizado",
    slug: "acompanhamento-personalizado",
    text: "Apoio proximo para orientar escolhas e manter coerencia entre projeto, execucao e resultado final.",
    description:
      "Acompanhamento consultivo para orientar clientes durante etapas de escolha, compra, execucao ou finalizacao, mantendo o projeto fiel ao conceito.",
    indicatedFor:
      "Familias que desejam suporte profissional para conduzir decisoes com mais tranquilidade durante a transformacao do espaco.",
    benefits: [
      "Apoio em decisoes sensiveis do processo",
      "Mais seguranca em compras e escolhas finais",
      "Coerencia estetica do inicio ao fim",
      "Experiencia mais tranquila e organizada",
    ],
    whatsappText:
      "Ola, gostaria de saber mais sobre acompanhamento personalizado com o Studio Andrea Zanoni.",
  },
];

export const testimonials = [
  {
    quote:
      "A Andrea traduziu nossas necessidades em uma casa elegante, acolhedora e muito funcional para a rotina da familia.",
    name: "Familia M.",
    context: "Projeto residencial",
  },
  {
    quote:
      "O processo foi claro do inicio ao fim. Sentimos seguranca nas decisoes e cuidado em cada detalhe apresentado.",
    name: "Cliente residencial",
    context: "Reforma e interiores",
  },
  {
    quote:
      "A consultoria nos ajudou a enxergar o potencial do espaco e evitar escolhas que nao combinavam com o que queriamos viver.",
    name: "Projeto de interiores",
    context: "Consultoria de arquitetura",
  },
  {
    quote:
      "O atendimento foi proximo e elegante. O resultado trouxe conforto sem perder sofisticacao.",
    name: "Familia A.",
    context: "Ambientacao residencial",
  },
  {
    quote:
      "As orientacoes tornaram a reforma mais objetiva. Conseguimos priorizar investimentos e manter uma linguagem coerente.",
    name: "Cliente de reforma",
    context: "Reforma residencial",
  },
  {
    quote:
      "Cada ambiente passou a refletir melhor a nossa historia. O projeto ficou bonito, pratico e muito nosso.",
    name: "Familia R.",
    context: "Interiores",
  },
];

export const faqs = [
  {
    question: "Como funciona a primeira conversa?",
    answer:
      "A primeira conversa e um diagnostico inicial para entender objetivos, estilo de vida, prazo, escopo, referencias e o momento do cliente. A partir disso, o studio orienta o melhor formato de atendimento.",
  },
  {
    question: "O atendimento e presencial ou online?",
    answer:
      "O atendimento pode ser estruturado de forma presencial, online ou hibrida, conforme a necessidade do projeto, a localizacao do cliente e a etapa de trabalho.",
  },
  {
    question: "O que esta incluso na consultoria?",
    answer:
      "A consultoria pode incluir analise de layout, direcao estetica, orientacao de materiais, cores, acabamentos, mobiliario, iluminacao e prioridades para reforma ou ambientacao.",
  },
  {
    question: "Voces acompanham a execucao da obra?",
    answer:
      "O acompanhamento pode ser contratado conforme o escopo. Ele ajuda a orientar escolhas, alinhar detalhes e manter a coerencia entre projeto, execucao e resultado final.",
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer:
      "O prazo varia conforme metragem, complexidade, quantidade de ambientes e nivel de detalhamento. A estimativa e apresentada apos a primeira conversa e definicao do escopo.",
  },
  {
    question: "Como solicitar um orcamento?",
    answer:
      "Voce pode enviar uma mensagem pelo formulario do site ou chamar pelo WhatsApp. O studio fara algumas perguntas iniciais para entender o projeto antes da proposta.",
  },
  {
    question: "O projeto e personalizado?",
    answer:
      "Sim. Cada projeto e desenvolvido a partir da rotina, preferencias, necessidades e identidade dos moradores, evitando solucoes prontas ou impessoais.",
  },
  {
    question: "Atendem reformas e interiores?",
    answer:
      "Sim. O Studio Andrea Zanoni atende reformas, interiores, ambientacao, consultoria e projetos de arquitetura, conforme o momento e objetivo do cliente.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "As condicoes de pagamento sao apresentadas na proposta comercial, de acordo com o escopo, etapas de entrega e formato de atendimento contratado.",
  },
  {
    question: "O que preciso enviar antes da primeira conversa?",
    answer:
      "Se tiver, envie fotos, medidas, plantas, referencias e uma breve descricao do que deseja transformar. Caso ainda nao tenha esses materiais, a primeira conversa ajuda a orientar o que sera necessario.",
  },
];
